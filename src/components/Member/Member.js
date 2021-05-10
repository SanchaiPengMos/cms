import React, { Component } from 'react'
import { CgPen } from "react-icons/cg";
import Edit from "./EditMember/EditMember"
import axios from 'axios'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './Member.css'

const apiSuser = 'sumuser'

export default class Member extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            id:"",
            firstname:"",
            lastname:"",
            email:"",
        }
      }

    componentDidMount = () => {

        console.log("==componentDidMount==")
    
        axios.get(apiSuser)
          
          .then(
          res => {

            const data = res.data


            const name 

            // for (var i = 0; i < res.data.length; i++) {
            //     this.setState({
            //         id:res.data[i].id,
            //         firstname:res.data[i].firstname,
            //         lastname:res.data[i].lastname,
            //         email: res.data[i].email
            //     })
            //     console.log("=====",res.data[i]);
            //   } 
            //   console.log(this.state.firstname)


              
          },
          err => {
            console.log(err)
          }
        )
      }
      

    render() {
        return (
            
            <Router>

            <div className="adminheader">

            <div className="member-admin">
                <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member" />
            </div>

            
            <div className="input-text">
                    <div className="roommng">
                        <button>สมาชิก</button> 
                        <input type="text" placeholder="Search" style={{marginLeft: '3%'}} />
                    </div>
                    <table className="table table-condensed table-hover" border='1' width='95%' >

                        <tbody>
                            <tr align="center" >
                                <td>ขื่อ-นามสกุล</td>
                                <td>วันเกิด</td>
                                <td>เบอร์โทรศัพท์</td>
                                <td>E-mail</td>
                                <td>แก้ไขข้อมูล</td>
                            </tr>

                            <tr align="center">
                                <td>{this.state.firstname} - {this.state.lastname}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>{this.state.email}</td>
                                <td><Link to={'/'}> <CgPen /></Link></td>
                            </tr>
                            
                        </tbody>
 
                    </table>
                    <Switch>
                        <Route exact path='/' component={Edit} />
                    </Switch>
                    
            </div>

            </div>
            </Router>
        )
    }
}
