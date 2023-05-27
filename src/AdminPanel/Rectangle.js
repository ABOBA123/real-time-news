import "./AdminPanel.css"
function Rectangle({children}) {
  return (
    <div>
      <div className="Rectangle d-fl flex-d-col jc-cent back-FFF br-15">
        {children}
      </div>
    </div>
  );
}
export default Rectangle;
