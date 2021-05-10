import React, { Component } from 'react'
import './History.css'



export default class History extends Component {
    constructor(props){
        super(props)
        this.state={
            name: "Ada",
            lastname: "aar",
            room: "A1",
            createdate: "23/05/2555",
            date: new Date()
        }    
    }

    stopTime(){
        console.log('==Stop==')
    }



    render() {

        const checkin = <button 
                            style={{marginLeft:10,backgroundColor:"aqua",height:30,width:100}} 
                            onClick={this.stopTime.bind(this)}>
                            CHECK IN
                        </button>

        const checkout =<button 
                            style={{marginLeft:10,backgroundColor:"aqua",height:30,marginRight:10,width:100}}
                            onClick={this.stopTime.bind(this)}>
                            CHECK OUT
                        </button>

        return (
            <div className="header-his">
                <div className="header-hisimg">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member" />
                </div>
                <div className="tbl-his" >

                    <table border="1" width='100%'>
                            <tbody>
                                <tr>

                                    <td>ชื่อ-นามสกุล</td>
                                    <td>ห้องที่จอง</td>
                                    <td>วันที่จอง</td>
                                    <td>เวลาเช็คอิน</td>
                                    <td>เวลาเช็คเอาท์</td>
                                    <td>Action</td>

                                </tr>
                                <tr>

                                    <td>{this.state.name}-{this.state.lastname}</td>
                                    <td>{this.state.room}</td>
                                    <td>{this.state.createdate}</td>
                                    <td>{this.state.date.toLocaleTimeString()}</td>
                                    <td>{this.state.date.toLocaleTimeString()}</td>
                                    <td>
                                        {checkin}
                                        {checkout}
                                    </td>

                                </tr>
                            </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
