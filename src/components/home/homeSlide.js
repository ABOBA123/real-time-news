import React from "react";
import "../../App.css";
import News from "../News/news.js";
import Selection from "./selection.js";
// import Loop from "./loop.svg"
function MainSlide() {
  return (
    <div className='App'>
      <div className='container d-fl ali-cent jc-cent'>
        <div className='main-container d-fl jc-cent ali-cent'>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Selection />
          </div>
          <div className='news'>
            <input
              type='search'
              className='search-news'
              placeholder='поиск по сайту '
            />
            <News />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSlide;
