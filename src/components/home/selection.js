import React from "react";
import { useState } from 'react';
import "./selection.css"
function Selection({ children, number }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div style={{display: "flex",flexDirection:"column",}}>
      <div
      className="d-fl ali-cent jc-sp-be mediascreen"
        style={{

          borderRadius: "15px",
          padding: "5px",
          background: isActive ?"#FFFFFF" :"#E8FBFE",
          transition: "all 0.3s ease-in-out",
          marginRight:"20px",
          marginBottom:"20px"
        }}
        onClick={()=>setIsActive(current => !current)}
        
      >
        <h2>{children} О спорте</h2>
        <h3>({number}113)</h3>
      </div>
    </div>
  );
}
export default Selection;
