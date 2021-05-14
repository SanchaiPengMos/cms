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

        this.state = {

            tableData :[{
                id:"",
                url:"",
                name:"",
                detail:"",

            }]}
    }

    componentDidMount(){
        console.log("componentDidMount")
        axios.get(apigettyperoom)
        .then(res => {
            this.setState({
                tableData: res.data
            })
            console.log("asd",this.state.tableData)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    renderTableRows = () => {
        return this.state.tableData.map(room => {
            return (
                <tr key={room.id}>
                    <td><img src={room.url} alt="member" /></td>
                    <td>{room.name}</td>
                    <td>{room.detail}</td>
                    <td align="center"><CgPen /> </td>
                    <td><IoTrashOutline /></td>
                </tr>
            )
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
                            {this.renderTableRows()}
                        </tbody>
                    </table>

                </div>

            </div>

            </Router>
        )
    }
}
