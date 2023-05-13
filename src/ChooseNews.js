import React from "react";
import { useState } from 'react';
function ChooseNews({ children, number }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div style={{display: "flex",flexDirection:"column",}}>
      <div
        style={{
          width: "345px",
          height: "100px",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
export default ChooseNews;
