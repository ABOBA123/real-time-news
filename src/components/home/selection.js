import React, { useEffect } from "react";
import { useState } from "react";
import "./selection.css";
import { getTagsFromApi } from "../../http";
function Selection({ children, number }) {
  const [chapters, setChapters] = useState([]);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    getTagsFromApi({ page: 1 }).then((data) => {
      console.log(data);
      setChapters(data);
    });
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {chapters && chapters.map((item)=>
        <div
          className="d-fl ali-cent jc-sp-be mediascreen"
          style={{
            borderRadius: "15px",
            padding: "5px",
            background: item.id===isActive.id ?  "#E8FBFE" : "#FFFFFF",
            transition: "all 0.3s ease-in-out",
            marginRight: "20px",
            marginBottom: "20px",
          }}
          onClick={() => setIsActive(item)}
        >
          <h2>{item.title}</h2>
          <h3></h3>
        </div>
      )}
      
    </div>
  );
}
export default Selection;
