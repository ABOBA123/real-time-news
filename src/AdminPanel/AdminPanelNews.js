import "./AdminPanel.css"
import { useNavigate } from "react-router";
function AdminPanelNews(){
    const navigate = useNavigate()
    return(
        <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="container" style={{height:"100vh",display:"flex",flexDirection:"row"}}>
            <div className="block" onClick={()=>navigate("/openAdminPanel")}>
                <h3>Новость номер 1</h3>
                <span>Описание</span>
            </div>
            
            </div>
        </div>
    )
}
export default AdminPanelNews;