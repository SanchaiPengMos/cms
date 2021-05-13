import React, { Component } from 'react'

import './NewsEdit.css'
export default class NewsEdit extends Component {

    constructor(props){
        super(props)
        this.state= {
            
        }
    }

    render() {
        return (
            <div className="header-newsedit">
        

                <div className="btn-newsedit">
                    <button>แก้ไขข่าว</button>
                </div>

                <div className="tbl-newsedit">
                    <table>

                            <tr>
                                <td><label>หัวข้อ</label></td>
                                <td><input type="text" placeholder="หัวข้อเรื่อง"/></td>
                            </tr>
                            <tr>
                                <td><label>รายละเอียด</label></td>
                                <td>
                                    <div className="detail-ed" style={{height:"100px",marginTop:"10px"}}>
                                        <input type="text" className="detail-edit" height="100%" placeholder="รายละเอียด" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button>บันทึก</button> 
                                </td>
                            </tr>

                    </table>
                </div>

      
            </div>
        )
    }
}
