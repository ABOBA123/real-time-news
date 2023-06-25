import React from "react";
import { useState } from "react";
import "./theme.css"
function Theme() {
    const [theme, setTheme] = useState(false)
  return (
    <div>
      <button className="switcher" onClick={() => setTheme(true)}>
        switch
      </button>
    </div>
  );
}
export default Theme;
