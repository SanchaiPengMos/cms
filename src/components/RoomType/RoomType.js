import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { IoTrashOutline } from "react-icons/io5";
import { CgPen } from "react-icons/cg";
import RoomtypeEdit from './RoomtypeEdit/RoomtypeEdit'
import axios from 'axios'

import './RoomType.css'

const apigettyperoom ="gettyperoom"

export default class RoomType extends Component {

    constructor(props){
        super(props)
        
    }

    

    componentDidMount(){
        console.log("componentDidMount")
        axios.get(apigettyperoom)
        .then(res => {
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })

    }
    
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

                        </tbody>
                    </table>

                </div>

            </div>

            </Router>
        )
    }
}
