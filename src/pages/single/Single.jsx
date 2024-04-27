import "./Single.css";
import Sidebar from "../../components/sideBar/SideBar";
import Navbar from "../../components/navbar/NavBar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/List";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <p className="itemKey">Email:</p>
                  <p className="itemValue">janedoe@gmail.com</p>
                </div>
                <div className="detailItem">
                  <p className="itemKey">Phone:</p>
                  <p className="itemValue">+1 2345 67 89</p>
                </div>
                <div className="detailItem">
                  <p className="itemKey">Address:</p>
                  <p className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </p>
                </div>
                <div className="detailItem">
                  <p className="itemKey">Country:</p>
                  <p className="itemValue">USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <div className="listCont">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
