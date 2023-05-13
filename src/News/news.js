import "./news.css"
function News({ children, number }) {
  return (
    <div>
      <div
        style={{
          width: "670px",
          height: "250px",
          background: "#F5F5F5",
          display: "flex",
          alignItems: "end",
          margin: "10px",
          borderRadius: "15px",
        }}
      >
        <span className="blur-text"><h4>Новость №{number}</h4>{children}Но базовый вектор развития обеспечивает актуальность системы обучения кадров, соответствующей насущным потребностям. Значимость этих проблем настолько очевидна, что внедрение современных методик создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса анализа существующих паттернов поведения!</span>
      </div>
    </div>
  );
}
export default News;
