import React, { Component } from 'react'
import Roommngm from './RoomManagementEdit/Roommngm'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { IoTrashOutline } from "react-icons/io5";
import { CgPen } from "react-icons/cg";

import './RoomManagement.css'

export default class RoomManagement extends Component {
    render() {

        const img = <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Ic_add_circle_outline_48px.svg/1024px-Ic_add_circle_outline_48px.svg.png"  alt="" />    
   

        return (
            <Router>
            <div className="roommanagement">
                
                <div className="roommns-admin">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member" />
                </div> 

                <div className="roommng">
                    <button>จำนวนห้องพัก</button>
                </div>

                <div className="tbl-room">
                    
                    <table border='1' width='100%'>
                        <tbody>
                            <tr>
                                <td width="30%">หมายเลขห้องพัก</td>
                                <td width="30%">ประเภทห้อง</td>
                                <td>ราคา(บาท)</td>
                                <td width="20%">แก้ไขข้อมูล</td>
                                <td>ลบ</td>
                            </tr>
                            <tr>
                                <td>A1</td>
                                <td>เตียงเดี่ยว</td>
                                <td>1200</td>
                                <td><Link to={'/Roommngm'}> <CgPen /></Link></td>
                                <td><IoTrashOutline /></td>
                            </tr>
                            <tr>
                                <td>A2</td>
                                <td>เตียงเดี่ยว</td>
                                <td>1200</td>
                                <td><Link to={'/Roommngm'}> <CgPen /></Link></td>
                                <td><IoTrashOutline /></td>
                            </tr>
                            <tr>
                                <td>A2</td>
                                <td>เตียงเดี่ยว</td>
                                <td>1200</td>
                                <td><Link to={'/Roommngm'}> <CgPen /></Link></td>
                                <td><IoTrashOutline /></td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className="btn-addroom">
                        <button>เพิ่มห้องพัก</button>
                    </div>
                    <Switch>
                        <Route exact path='/Roommngm' component={Roommngm} />
                    </Switch>

                </div>  


            </div>
            </Router>
        )
    }
}
