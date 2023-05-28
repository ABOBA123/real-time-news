const uuid = require("uuid");

let subscribers = [],
  news = [{ id: 1, title: "Первая новость", messages: [] }],
  users = [
    { id: 1, name: "evyz", isAdmin: true },
    { id: 2, name: "viktor" },
  ];

function getSubs(id) {
  let subs = subscribers.findIndex((subscriber) => subscriber.id === id);

  if (subs > -1) {
    return subscribers[subs].subs;
  }
}

function setNewSubscriber(id, ws) {
  let subs = subscribers.findIndex((subscriber) => subscriber.id === id);

  if (subs > -1) {
    subscribers[subs].subs.push(ws);
  } else {
    subscribers.push({ id, subs: [ws] });
  }

  return subscribers[subs];
}

function removeSubscriber(id, ws) {
  let subs = subscribers.findIndex((subscriber) => subscriber.id === id);
  if (subs > -1) {
    let index = subscribers[subs].subs.findIndex(
      (sub) => sub.subscribeId === ws.subscribeId
    );
    if (index > -1) {
      if (subscribers[subs].subs.length > 1) {
        subscribers[subs].subs = subscribers[subs].subs.slice(index, 1);
      } else {
        subscribers[subs].subs = [];
      }
    }
  }
}

function generateMessage(obj) {
  return JSON.stringify(obj);
}

module.exports = function (app) {
  app.ws("/:id", (ws, req) => {
    let { id } = req.params;
    let { name } = req.query;
    let currentNews = news.find((item) => item.id === Number(id));
    if (!currentNews) {
      return ws.close();
    }
    ws.subscribeId = uuid.v4();
    setNewSubscriber(id, ws);
    ws.send("connected");
    ws.on("message", (msg) => {
      let parsed;
      try {
        parsed = JSON.parse(msg);
      } catch (err) {
        return ws.send(JSON.stringify(err));
      }

      let { type, message } = parsed;
      type = type || "add_message";
      if (type === "add_message") {
        if (!name) {
          return ws.send(
            generateMessage({
              type,
              isError: true,
              message: "NOT_AUTHORIZED",
            })
          );
        }
        let user = users.find((user) => user.name === name);
        if (!user || (user && !user.isAdmin)) {
          return ws.send(
            generateMessage({
              type,
              isError: true,
              message: "FORBIDDEN",
            })
          );
        }

        let subs = getSubs(id);
        subs.forEach((sub) => {
          let obj = { type: "new_message", id, date: new Date(), message };
          let newsObj = news.find((item) => item.id === Number(id));
          newsObj.messages.push(obj);
          sub.send(generateMessage(obj));
        });
      }
      if (type === "get_messages") {
        let currentNews = news.find((item) => item.id === Number(id));
        if (currentNews) {
          return ws.send(
            generateMessage({
              type: "get_messages",
              id,
              message: currentNews.messages.reverse().slice(0, 40).reverse(),
            })
          );
        }
        return ws.send(
          generateMessage({
            type: "get_messages",
            isError: true,
            message: "NOT_FOUND_NEWS",
          })
        );
      }
    });
    ws.on("close", () => {
      removeSubscriber(id, ws);
    });
  });
};
