import "./List.css"
import Sidebar from "../../components/sideBar/SideBar"
import Navbar from "../../components/navbar/NavBar"
import Datatable from "../../components/Datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List