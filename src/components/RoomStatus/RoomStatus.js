import React, { Component } from 'react'
import './RoomStatus.css'

export default class RoomStatus extends Component {

    constructor(props){
        super(props)
        this.state = 
        {
            id : 0,
            nameroom : "A1",
            status : true
        }
    
    }

    render() {
        return (
            <div className='head-roomstatus'>
                <div className="roomstatus-admin">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member" />
                </div> 

                <div className='btn-status' >
                    <button >สถานะห้อง</button>
                </div> 

                <div className='datestatus'>
                    <label>เลือกวันที่ที่ต้องการดูสถานะห้อง : </label>
                    <input type="date" />
                </div>

                <div className='table-status'>

                <table border='1' width='100%' >

                    <tbody>
                        <tr>
                            <td>หมายเลขห้อง</td>
                            <td>Status</td>
                           
                        </tr>
                        <tr>
                            <td>{this.state.nameroom}</td>
                            <td><input type='radio' value={this.state.status} /></td>
                        </tr>
                    </tbody>
                </table>
                </div>

            </div>
        )
    }
}
