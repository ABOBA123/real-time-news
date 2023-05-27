import "./AdminPanel.css";
function RectangleBlueButton({children}) {
  return (
    <div>
      <button className="Rectangle-blue-button cursor-p d-fl jc-cent ali-cent">{children}</button>
    </div>
  );
}
export default RectangleBlueButton;
