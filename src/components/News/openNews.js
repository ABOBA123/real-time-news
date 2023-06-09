import React, { useCallback, useEffect, useRef, useState } from "react";
import "./openNews.css";
import { useParams } from "react-router-dom";
import { getOneNewsFromApi } from "../../http"
function OpenNews() {
  const [ newsInfo, setNewsInfo] = useState([])
  const { id } = useParams();
  const [isPaused, setIsPaused] = useState(false);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    if (!isPaused && id) {
      ws.current = new WebSocket("ws://localhost:8080/" + id); // создаем ws соединение
      ws.current.onopen = () => {setStatus("Соединение открыто");
      ws.current?.send(JSON.stringify({
        type:"get_messages"
      }))}; // callback на ивент открытия соединения
      ws.current.onclose = () => setStatus("Соединение закрыто"); // callback на ивент закрытия соединения

      gettingData();
    }

    return () => ws.current.close(); // кода меняется isPaused - соединение закрывается
  }, [ws, isPaused, id]);

  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      //подписка на получение данных по вебсокету
      if (isPaused) return;
      try{
        let parsed = JSON.parse(e?.data)
        if(parsed.type === "get_messages"){
          return setMessages(parsed?.message)
        }
      } catch (err){
        
      }
      setMessages((prev) => [...prev, { message: e?.data }]);
    };
  }, [isPaused]);

  useEffect(() => {
    setMessages((prev) => [...prev, data]);
  }, [data]);
  useEffect(()=>{
    // console.log(ws)
    if(!isPaused){
  
    }
  },[isPaused,ws])
  useEffect(()=>{
    getOneNewsFromApi({ id }).then((data)=>{
      console.log(data)
      setNewsInfo(data)
    })
  },[id])

  var today = new Date(),
            date = today.getFullYear() + '-' + '0' +(today.getMonth() + 1) + '-' + today.getDate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className='container d-fl jc-cent'>
        <div className='news-container'>
          <div className='SplitSlide'>
            <h1>Новость №1</h1>
            <p>
              Задача организации, в особенности же глубокий уровень погружения
              выявляет срочную потребность новых принципов формирования
              материально-технической и кадровой базы! Предварительные выводы
              неутешительны: высокотехнологичная концепция общественного уклада
              предполагает независимые способы реализации соответствующих
              условий активизации. Вот вам яркий пример современных тенденций —
              синтетическое тестирование, а также свежий взгляд на привычные
              вещи — безусловно открывает новые горизонты для укрепления
              моральных ценностей.
            </p>
          </div>
          
          {messages &&
            messages?.length > 0 &&
            messages.map((message) => (
              <div className='SplitSlide'>
                <span>{date}</span>
                {/* {today.getDate() === new Date().getDate() && (
                <span> (today)</span>
            )} */}
                <p>{message?.message}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default OpenNews;
