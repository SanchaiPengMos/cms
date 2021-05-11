import React, { Component } from 'react'
import Edit from "./EditMember/EditMember"
import axios from 'axios'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './Member.css'

const apiSuser = 'http://127.0.0.1:9999/searchuser'


export default class Member extends Component {

    constructor(props){
        super(props)    
        this.renderEditUser = this.renderEditUser.bind(this)
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

    renderEditUser(){
        console.log("id",this.state.id)
    }

    renderTableHeader(){
        return Object.keys(this.state.tableData[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
    }



    renderTableRows = () => {
        return this.state.tableData.map(user => {
            console.log("userID",user)
            return (
                <tr key={user.id}>
                    <td>{user.firstname}-{user.lastname}</td>
                    <td>{user.email}</td>
                    <td align="center" >{user.tel}</td>
                    <td align="center">
                        <Edit 
                            id={user.id} 
                            firstname={user.firstname} 
                            lastname={user.lastname} 
                            tel={user.tel} 
                        /> 
                    </td>
                </tr>
                
            )
        })
    }
      
    render() {

        const {tableData} = this.state ;

        console.log(tableData)

        return tableData.length > 0 
        ?(
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
        ) : (
            <div>
                No users.
            </div>
        )


    }
}
