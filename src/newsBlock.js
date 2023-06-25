import { useState } from "react";
import "./newsBlock.css";
import React from "react";
function NewsBlock() {
  const [trueBurger, setTrueBurger] = useState(false);

  return (
    <div
      className='p-fix w-100 d-fl ali-cent jc-cent'
      style={{
        top: 10,
        left: 0,
        height: "50px",
        marginTop: 10,
        marginBottom: 20,
        zIndex: 2,
      }}
    >
      <div
        className='br-15 d-fl jc-sp-be al-cent flex-d-row back-FFF hid'
        style={{
          width: "1050px",
          height: "100%",
          padding: "11px",
        }}
      >
        <h2>News</h2>

        <div
          className={`menu-chapters ${
            trueBurger ? "active" : ""
          } d-fl flex-d-row jc-sp-ar ali-cent`}
          style={{
            width: "35%",
          }}
        >
          <button onClick={() => setTrueBurger(!trueBurger)} className='burger'>
            <div className='crumb'></div>
            <div className='crumb'></div>
            <div className='crumb'></div>
          </button>
          <div className='chapters d-fl flex-d-row jc-sp-ar'>
            <h4
              onClick={() => {
                window.location.pathname = "/adminPanel";
              }}
            >
              Admin Panel
            </h4>
            <h4
              onClick={() => {
                window.location.pathname = "/aboutus";
              }}
            >
              About us
            </h4>
            <h4
              onClick={() => {
                window.location.pathname = "/";
              }}
            >
              Block
            </h4>
            {!localStorage.getItem("nickname") !== undefined && (
              <h4
                onClick={() => {
                  window.location.pathname = "/login";
                }}
              >
                Sign In
              </h4>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
export default NewsBlock;
