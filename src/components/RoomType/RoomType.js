import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { IoTrashOutline } from "react-icons/io5";
import { CgPen } from "react-icons/cg";
import RoomtypeEdit from './RoomtypeEdit/RoomtypeEdit'
import './RoomType.css'

export default class RoomType extends Component {
    render() {



        return (
            <Router>
            <div className="header-roomty">

                <div className="roommns-admin">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member" />
                </div>

                <div className="roommng">
                    <button>ประเภทห้องพัก</button>
                </div>



                <div className="tbl-roomtype">

                    <table border="1" width='100%' > 
                        <tbody>
                            <tr>
                                <td width="30%">รูปห้อง</td> 
                                <td >ประเภท</td>
                                <td >ข้อมูล</td>
                                <td >แก้ไข</td>
                                <td width="30%">ลบ</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/282/2018/04/23070030/Room-1.jpg"  alt="img room" />
                                </td>
                                <td>เตียงเดี่ยว</td>
                                <td>มีแอร์</td>
                                <td><Link to={'/RoomtypeEdit/RoomtypeEdit'}> <CgPen /></Link></td>
                                <td><IoTrashOutline /></td>
                            </tr>

                           
                        </tbody>
                    </table>
                    <div className="btn-addroom">
                        <button>แก้ไข</button>
                    </div>
                    <Switch>
                        <Route exact path='/RoomtypeEdit/RoomtypeEdit' component={RoomtypeEdit} />
                    </Switch>

                </div>

            </div>

            </Router>
        )
    }
}
