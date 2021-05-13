import React, { Component } from 'react'
import { CgPen } from "react-icons/cg";
import Edit from "./EditMember/EditMember"
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
            }]

        }
      }

    componentDidMount = () => {

        console.log("==componentDidMount==")
    
        axios.get(apiSuser)
          
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
        return this.state.tableData.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.firstname}-{user.lastname}</td>
                    <td>{user.email}</td>
                    <td align="center" >{user.tel}</td>
                    <td align="center"><CgPen /> </td>
                </tr>
            )
        })
    }
      
    render() {

        const {tableData} = this.state ;
        console.log("tabledata",tableData)

        return (
            <div className="input-text">
            <div className="roommng">
                <button>สมาชิก</button> 
            </div>
            <table className="table table-condensed table-hover" border='1' width='95%' >

                <tbody>
                    <tr align="center" >
                        <td>ขื่อ-นามสกุล</td>
                        <td>E-mail</td>
                        <td>เบอร์โทรศัพท์</td>
                        <td>แก้ไขข้อมูล</td>
                    </tr>
                        {this.renderTableRows()}
                </tbody>

            </table>
            <Switch>
                <Route exact path='/' component={Edit} />
            </Switch>
            
    </div>
        )
    }
}
