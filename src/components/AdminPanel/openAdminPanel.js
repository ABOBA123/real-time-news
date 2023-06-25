import "./AdminPanel.css";
import Rectangle from "./Rectangle.js";
import RectangleBlueButton from "./RectangleBlueButton.js";
function OpenAdminPanel() {
  return (
    <div className="d-fl ali-cent jc-cent w-100">
      <div
        className="container d-fl jc-cent flex-d-col al-fl-st"
      >
        <Rectangle>
          <h4>Название новости</h4>
          <span>Описание новости</span>
        </Rectangle>
        <button className="Rectangle-button">
          <h3> Создать новое сообщение</h3>
        </button>
        <Rectangle>
          <span>*** сделать textarea для написания сообщения ***</span>
          <RectangleBlueButton>
            <h3>Опубликовать</h3>
          </RectangleBlueButton>
        </Rectangle>
        <Rectangle>
          <span>
            Как уже неоднократно упомянуто, сторонники тоталитаризма в науке
            неоднозначны и будут превращены в посмешище, хотя само их
            существование приносит несомненную пользу обществу. Не следует,
            однако, забывать, что реализация намеченных плановых заданий не
            оставляет шанса для приоретизации разума над эмоциями.
            Противоположная точка зрения подразумевает, что действия
            представителей оппозиции будут рассмотрены исключительно в разрезе
            маркетинговых и финансовых предпосылок.
          </span>
          <RectangleBlueButton>Сохранить изменение</RectangleBlueButton>
        </Rectangle>
      </div>
    </div>
  );
}
export default OpenAdminPanel;
