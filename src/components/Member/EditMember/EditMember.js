import React, { Component } from 'react'
import './Editmember.css'

export default class EditMember extends Component {

    render() {
        
        return (
            <div className="EditMember">
                <div className="btn-edit">
                    <button className="btn-editmem"> แก้ไขข้อมูล </button>
                </div>
                <form>
                <div className="table-editmem">

                    <table border="1">
                        <tbody>
                        <tr>
                            <td>ชื่อ</td>
                            <td><input type="text" name="name"/></td>
                        </tr>

                        <tr>
                            <td>นามสกุล</td>
                            <td><input type="text" name="lastname" /></td>
                        </tr>

                        <tr>
                            <td>วันเกิด</td>
                            <td><input type="date" name="birthday"/></td>
                        </tr>

                        <tr>
                            <td>เบอร์โทรศัทพ์</td>
                            <td><input type="text" name="tel" /></td>
                        </tr>

                        <tr>
                            <td>E-Mail</td>
                            <td><input type="email" name="email" /></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>

                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="btn-saveform">
                                    <button> บันทึก </button>
                                    <button> ยกเลิก </button>
                    </div>


                </div>
                </form>

            </div>
        )
    }
}
