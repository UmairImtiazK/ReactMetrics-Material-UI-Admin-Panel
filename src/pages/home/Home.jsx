import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'
import List from '../../components/Table/List'


export default function Home() {
  return (
    <div className='home | container'>
    <SideBar/>
    <div className="homeContainer">
    <NavBar/>
    <div className="homeContChild">
    <div className="widget--cont">
      <Widget type="user"/>
      <Widget type="order"/>
      <Widget type="earning"/>
      <Widget type="balance"/>
    </div>
    <div className="chartCont">
      <Featured/>
      <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
    </div>
    <div className="TableCont">
      <h1 className='fs-primary-heading'>Latest Transactions</h1>
      <div className='tableSubCont'>
        <List/>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
