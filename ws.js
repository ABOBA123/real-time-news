const uuid = require("uuid");

let subscribers = [];

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

module.exports = function (app) {
  app.ws("/:id", (ws, req) => {
    let { id } = req.params;
    ws.subscribeId = uuid.v4();
    setNewSubscriber(id, ws);
    ws.send("connected");
    ws.on("message", (msg) => {
      let subs = getSubs(id);
      subs.forEach((element) => {
        element.send(msg);
      });
    });
    ws.on("close", () => {
      removeSubscriber(id, ws);
    });
  });
};
