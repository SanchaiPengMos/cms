import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BannerAdmin from './components/Banner/BannerAdmin'
import Case from './components/Pay/Case'
import GoogleMap from './components/GoogleMap/GoogleMap'
import History from './components/History/History'
import Admin from './components/Index/Inhome'
import Member from './components/Member/Member'
import News from './components/News/News'
import RoomManagement from './components/RoomManagement/RoomManagement'
import RoomStatus from './components/RoomStatus/RoomStatus'
import RoomType from './components/RoomType/RoomType'

import './App.css'

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state= {

    }
  }

  handleLogout(){
    console.log("==Logout==")
  }

    render() {
        return (

          <Router>

            <div className="headeradmin">

            <div className="adminpage">

                <div className="btn-admin">
                <div className="appheader">
                  <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member"/>
                  <p>HotelNonthaburynigthPlaza</p>
                </div>
                    
                    <NavLink to={'/home'}>
                      <button className="btnthird">  หน้าหลัก  </button>
                    </NavLink>
                    
                    <NavLink to={'/Member'}>
                      <button className="btnthird"> สมาชิก  </button> 
                    </NavLink>
                     
                    <NavLink to={'/RoomStatus'}>
                      <button className="btnthird"> สถานะห้อง  </button> 
                    </NavLink>
                    
                    <NavLink to={'/RoomManagement'}>
                      <button className="btnthird"> จัดการห้องพัก  </button> 
                    </NavLink>
                    
                    <NavLink to={'/RoomType'}>
                      <button className="btnthird">  ประเภทห้องพัก  </button> 
                    </NavLink>
                    
                    <NavLink to={'/News'}>
                      <button className="btnthird"> ประชาสัมพันธ์  </button> 
                    </NavLink>
                    
                    <NavLink to={'/BannerAdmin'}>
                      <button className="btnthird"> แบนเนอร์  </button> 
                    </NavLink>
                    
                    <NavLink to={'/GoogleMap'}>
                      <button className="btnthird"> แผนที่  </button> 
                    </NavLink>
                    
                    <NavLink to={'/Case'}>
                      <button className="btnthird"> สถานะชำระเงิน  </button> 
                    </NavLink>
                    
                    <NavLink to={'/History'}>
                      <button className="btnthird"> ประวัติการจอง  </button> 
                    </NavLink>
                    <button className="btnthird" onClick={this.handleLogout}>  ออกจากระบบ  </button>

                </div>

                <Switch>

                  <Route exact path='/home' component={Admin} />
                  <Route exact path='/Member'  component={Member} />
                  <Route exact path='/RoomStatus'  component={RoomStatus} />
                  <Route exact path='/RoomManagement'  component={RoomManagement} />
                  <Route exact path='/RoomType'  component={RoomType} />
                  <Route exact path='/News'  component={News} />
                  <Route exact path='/BannerAdmin'  component={BannerAdmin} />
                  <Route exact path='/GoogleMap'  component={GoogleMap} />
                  <Route exact path='/Case'  component={Case} />
                  <Route exact path='/History'  component={History} />

                </Switch>

            </div>
            </div>

          </Router>
        )
    }
}
