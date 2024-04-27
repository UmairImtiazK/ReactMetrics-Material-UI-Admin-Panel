import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';
import './sideBar.css';

export default function SideBar() {
  const [blackground, setblackground] = useState();
  const handleonblack=()=>{
    document.body.style.backgroundColor = blackground;
    setblackground('#333');
  }

  const [whtground, setwhtground] = useState();
  const handleonwhite=()=>{
    document.body.style.backgroundColor = whtground;
    setwhtground('#fff');
  }

  return (
    <section className='sideBar '>
      <div aria-label='logo'>
        <Link  to='/'>
        <span className='text-center fs-700 fw-bold text-netural-200'>UmAdmin</span>
        </Link>
      </div>
      
      <div aria-label='main' className='margin-bottom-300'>
      <h2 className='fs-200 text-accent-200 padding-block-300'>Main</h2>
      <ul>
        <li >
          <Link className='link'>
      <DashboardIcon/>
        <span className='text-accent-100 fw-semi-bold'>Panel</span></Link>
          </li>
        </ul>
      </div>


      <div aria-label='list' className='margin-bottom-200'>
      <h2 className='fs-200 text-accent-200 padding-block-300'>List</h2>
      <ul>
        <li>
          <Link to="/users" className='link'>
      <PersonOutlineIcon/>
        <span className='text-accent-100 fw-semi-bold'>User</span></Link>
          </li>
          <li>
          <Link to="/products" className='link'>
      <StoreIcon/>
        <span className='text-accent-100 fw-semi-bold'>Product</span></Link>
          </li>
          <li>
          <Link className='link'>
      <CreditCardIcon/>
        <span className='text-accent-100 fw-semi-bold'>Orders</span></Link>
          </li>
          <li>
          <Link className='link'>
      <LocalShippingIcon/>
        <span className='text-accent-100 fw-semi-bold'>Delivery</span></Link>
          </li>
        </ul>
      </div>


      <div aria-label='list'  className='margin-bottom-300'>
      <h2 className='fs-200 text-accent-200 padding-block-300'>USEFUL</h2>
      <ul>
        <li>
          <Link className='link'>
      <InsertChartIcon/>
        <span className='text-accent-100 fw-semi-bold'>Stats</span></Link>
          </li>
          <li>
          <Link className='link'>
      <NotificationsNoneIcon/>
        <span className='text-accent-100 fw-semi-bold'>Updates</span></Link>
          </li>
        </ul>
      </div>


      <div aria-label='SERVICE'  className='margin-bottom-300'>
      <h2 className='fs-200 text-accent-200 padding-block-300'>SERVICE</h2>
      <ul>
        <li>
          <Link className='link'>
      <SettingsSystemDaydreamOutlinedIcon/>
        <span className='text-accent-100 fw-semi-bold'>System Health</span></Link>
          </li>
          <li>
          <Link className='link'>
      <PsychologyOutlinedIcon/>
        <span className='text-accent-100 fw-semi-bold'>Logs</span></Link>
          </li>

          <li>
          <Link className='link'>
      <SettingsApplicationsIcon/>
        <span className='text-accent-100 fw-semi-bold'>Settings</span></Link>
          </li>

        </ul>
      </div>

      <div aria-label='USER'  className='margin-bottom-300'>
      <h2 className='fs-200 text-accent-200 padding-block-300'>USER</h2>
      <ul>
        <li>
          <Link className='link'>
      <AccountCircleOutlinedIcon/>
        <span className='text-accent-100 fw-semi-bold'>Profile</span></Link>
          </li>
          <li>
          <Link className='link'>
      <ExitToAppIcon/>
        <span className='text-accent-100 fw-semi-bold'>Logout</span></Link>
          </li>
        </ul>
      </div>

      <div aria-label='color-modes' className='padding-block-300'>
      <button className='btn' onClick={handleonwhite}></button>
      <button className='btn bg-black' onClick={handleonblack}></button>
      </div>
    </section>
  )
}
