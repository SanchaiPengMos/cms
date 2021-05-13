import React, { Component } from 'react'

export default class BannerEdit extends Component {



    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {
        return (
            <div className="header-editroomtype">

                <div className="btn-edittyperoom">
                    <button>แก้ไขประเภทห้อง</button>
                </div>


                <div className="tbl-typeroom">
                    <table border="1">
                        <thead>
                       
                                <tr>
        
                                        <input className="nput-group" type="file"  />
                                </tr>
                           
                        </thead>
                        <tbody>
                            <tr>
                                <td>ชื่อรูปภาพ</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <button >ตกลง</button> 
                                    <input type="button" value="ย้อนกลับ" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}