import React, { useState } from "react";
import "./theme.css";

function Theme() {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleSwitch = () => {
    setIsSwitched(!isSwitched);
  };


  
  return (
    <div>
      <button
        className={`switcher ${isSwitched ? "switched" : ""}`}
        onClick={handleSwitch}
        
      >
        <div className="switcherCircle"></div>
      </button>
    </div>
  );
}

export default Theme;

