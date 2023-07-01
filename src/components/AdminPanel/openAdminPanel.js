import "./AdminPanel.css";
import Rectangle from "./Rectangle.js";
import RectangleBlueButton from "./RectangleBlueButton.js";
import React from "react";
import { useState } from "react";
function OpenAdminPanel() {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='w-100'>
      <div className='container d-fl flex-d-col'>
        <Rectangle>
          <input
            className='search-news black'
            onChange={handleInputChange}
            value={searchValue}
            style={{
              background: "var(--alt-main)",
              fontWeight: "750",
              border: "1px solid var(--alt-second)",
            }}
            placeholder='Название новости'
          />
          <textarea
            className='code-editor'
            value={value}
            placeholder='Описание новости'
            onChange={handleChange}
            spellCheck='false'
            style={{
              background: "var(--alt-main)",
              border: "1px solid var(--alt-second)",
            }}
          />
        </Rectangle>
        <button className='Rectangle-button'>
          <h3> Создать новое сообщение</h3>
        </button>
        {/* <Rectangle>
          <span>*** сделать textarea для написания сообщения ***</span>
          <RectangleBlueButton>
            <h3>Опубликовать</h3>
          </RectangleBlueButton>
        </Rectangle> */}
        <Rectangle>
          {searchValue === "" ? <h2>Название</h2> : <h2>{searchValue}</h2>}
          {/* <h2>{searchValue}</h2> */}
          {value === "" ? (
            <p>Вот так это выглядит! Здесь пока пусто</p>
          ) : (
            <textarea
              className='code-editor'
              value={value}
              placeholder='Описание новости'
              style={{ resize: "vertical" }}
            />
          )}
          <RectangleBlueButton>Сохранить изменение</RectangleBlueButton>
        </Rectangle>
      </div>
    </div>
  );
}
export default OpenAdminPanel;
