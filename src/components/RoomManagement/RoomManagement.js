import React, { Component } from 'react'
import Roommngm from './RoomManagementEdit/Roommngm'
import axios from 'axios'


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { IoTrashOutline } from "react-icons/io5";
import { CgPen } from "react-icons/cg";

import './RoomManagement.css'

const roomtype ="editroom"

export default class RoomManagement extends Component {

    constructor(props){
        super(props)    
        this.state = {

            tableData :[{
                id:"",
                name_room:"",
                detail:"",
                price:""
            }]

        }
      }
      componentDidMount = () => {

        console.log("==componentDidMount==")
    
        axios.get(roomtype)
          
          .then(
          res => {

            this.setState({
                tableData: res.data
            })
            console.log(this.state.tableData)
 
          },
          err => {
            console.log(err)
          }
        )
      }

    renderTableHeader(){
        return Object.keys(this.state.tableData[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
    }

    renderTableRows = () => {
        return this.state.tableData.map(room => {
            return (
                <tr key={room.id}>
                    <td>{room.name_room}</td>
                    <td>{room.detail}</td>
                    <td>{room.price}</td>
                    <td align="center"><CgPen /> </td>
                    <td align="center"><IoTrashOutline /> </td>

                </tr>
            )
        })
    }


    render() {

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

                            {this.renderTableRows()}

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

