import React, { Component } from 'react'
import './Case.css'

export default class Case extends Component {

    constructor(props){
        super(props)
        this.state= {
            name : " ",
            lastname : " ",
            room: " ",
            createdate: " ",
            createdated:" ",
            status: false

        }
    }


    render() {
        return (
            <div className="case-admin">

                <div className="roommns-admin">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member" />
                </div>
                
                <div className="btn-pal">
                    <button>สถานะชำระเงิน</button>
                </div> 

                <div className="tbl-pay">

                    <table border='1' width="100%" > 

                        <tbody>

                            <tr>
                                <th>ชื่อ-นามสกุล</th>
                                <th>ห้องที่จอง</th>
                                <th>วันที่จอง</th>
                                <th>ถึงวันที่</th>
                                <th>สถานะ</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="radio" defaultChecked={true} /></td>
                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}
