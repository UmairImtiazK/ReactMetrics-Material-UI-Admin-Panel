import React from 'react'
import './navBar.css';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

export default function NavBar() {
  return (
    <section className='navBarSection'>
      <div className="navBar">
        <div className="search">
        <input type="text" placeholder='Search...' />
        <SearchOutlinedIcon/>
        </div>
        <div className="items">
        <div className="item">
          <div className='language'>
         <LanguageOutlinedIcon/>
          English
          </div>
        </div>
        <div className="item">
          <DarkModeOutlinedIcon/>
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon/>
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon/>
          <span className='fw-semi-bold'>1</span>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon/>
          <span className='fw-semi-bold'>2</span>
        </div>
        <div className="item">
          <ListOutlinedIcon/>
        </div>
        <div className="item">
        <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
        </div>

      </div>
      </div>
    </section>
  )
}
