import "./news.css";
import { useNavigate } from "react-router-dom";
import { getNewsFromApi } from "../../http";
import { useEffect, useState } from "react";
function News({ children, number }) {
  let navigator = useNavigate();
  const switchRouter = () => {
    navigator("/1");
  };
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNewsFromApi({ page: 1 }).then((data) => {
      console.log(data);
      setNews(data);
    });
  }, []);
  return (
    <div onClick={switchRouter}>
      { news && news.map((item)=>
        <div
          className="d-fl ali-end br-15 media"
          style={{
            background: "#F5F5F5",
            margin: "10px",
          }}
        >
          <span className="blur-text">
            <h4>{item.title}</h4>
            {children}Но базовый вектор развития обеспечивает актуальность
            системы обучения кадров, соответствующей насущным потребностям.
            Значимость этих проблем настолько очевидна, что внедрение
            современных методик создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса анализа существующих паттернов поведения!
          </span>
          
        </div>
        
      )}
      
    </div>
  );
}
export default News;
