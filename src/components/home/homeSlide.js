import React from "react";
import "../../App.css";
import News from "../News/news.js";
import Selection from "./selection.js";
import Loop from "../pictures/loop.svg"
function MainSlide() {
  return (
    <div className='App'>
      <div className='container d-fl  jc-cent'>
        <div className='main-container d-fl jc-cent '>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Selection />
          </div >
          <div className='news'>
            <div style={{width:"200px",height:"50px", marginTop:"10px"}} className=" p-rel d-fl fl-d-row ali-cent">
            <input
              type='search'
              className='search-news'
              placeholder='поиск по сайту '
            />
            <img className="p-abs white-loop" style={{right:"20px"}} src={Loop}/>
            </div>
            <News />
          </div>  
        </div>
      </div>
    </div>
  );
}

export default MainSlide;
