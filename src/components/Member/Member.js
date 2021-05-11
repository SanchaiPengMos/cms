import React, { Component } from 'react'
import Edit from "./EditMember/EditMember"
import { CgPen } from "react-icons/cg";
import { IoTrashOutline } from "react-icons/io5";


import axios from 'axios'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './Member.css'

const apiSuser = 'searchuser'


export default class Member extends Component {

    constructor(props){
        super(props)    
        this.state = {

            tableData :[{
                id:"",
                firstname:"",
                lastname:"",
                email:"",
                tel:"",
                birthday:""
            }],
            id:""

        }
      }

    componentDidMount = () => {

        axios.get(apiSuser)
          
          .then(
          res => {

            this.setState({
                id: res.data[0].id,
                tableData: res.data
            })
 
          },
          err => {
            console.log(err)
          }
        )
      }
  
    render() {
    
        return (
            <div className="input-text">
            <div className="roommng">
                <button>สมาชิก</button> 
            </div>

            <table  border='1' width='95%' >                
                <tbody>
                    <tr align="center" >
                        <td>ขื่อ-นามสกุล</td>
                        <td>E-mail</td>
                        <td>เบอร์โทรศัพท์</td>
                        <td>แก้ไขข้อมูล</td>
                        <td>ลบ</td>
                    </tr>
            {this.state.tableData.map((note)=>{
                return (
                    <tr key={note.id}>
                        <td>{note.firstname}-{note.lastname} </td>
                        <td>{note.email}</td>
                        <td>{note.tel}</td>
                        <td align="center">
                            <Edit 
                                id={note.id}  
                                firstname={note.firstname}
                                lastname={note.lastname}
                                tel={note.tel}
                                />
                        </td>
                        <td align="center"> <IoTrashOutline /> </td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
            
    </div>
        )
    }
}
