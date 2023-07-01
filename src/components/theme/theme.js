import React, { useState } from "react";
import "./theme.css";

function Theme({ children, hiding }) {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleSwitch = () => {
    setIsSwitched(!isSwitched);
  };

  return (
    <div className={isSwitched ? "dark-theme" : "ligth-theme"}>
      {!hiding && (
        <button
          className={`switcher ${isSwitched ? "switched" : ""}`}
          onClick={handleSwitch}
        >
          <div className='switcherCircle'></div>
        </button>
      )}
      {children}
    </div>
  );
}

export default Theme;
