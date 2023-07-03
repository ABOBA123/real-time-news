import React, { useState, useEffect } from "react";
import "./theme.css";

function Theme({ children, hiding }) {
  const [isSwitched, setIsSwitched] = useState(null);

  const handleSwitch = () => {
    setIsSwitched(!isSwitched);
  };

  useEffect(() => {
    if (isSwitched === true) {
      localStorage.setItem("isDark", "true");
    } else if (isSwitched === false) {
      localStorage.setItem("isDark", "false");
    }
  }, [isSwitched]);

  useEffect(() => {
    const isDark = localStorage.getItem("isDark");
    if (isDark === "true") {
      setIsSwitched(true);
    } else {
      setIsSwitched(false);
    }
  }, []);

  return (
    <div className={isSwitched === true ? "dark-theme" : "ligth-theme"}>
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
