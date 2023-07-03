import React, { useState, useEffect } from "react";
import "./theme.css";

function Theme({ children, hiding }) {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleSwitch = () => {
    setIsSwitched(!isSwitched);
    if (isSwitched === false){
    localStorage.setItem('isDark', true)
    }
    else{
    localStorage.setItem('isDark', false)
    }
    console.log(localStorage.getItem('isDark'))
  };
  useEffect(()=>{
    const isDark = localStorage.getItem('isDark')
    if(isDark === false){
      setIsSwitched(true)
    }
    else{
      setIsSwitched(false)
    }
    console.log(isDark)
  },[])
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
