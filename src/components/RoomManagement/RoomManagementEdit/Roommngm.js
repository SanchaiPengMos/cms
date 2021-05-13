import React, { Component } from 'react'
import  './Roommngm.css'

export default class Roommngm extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='Roommngm'>
                <form>
                <div className="btn-nngm">
                    <button>แก้ไขข้อมูล</button>
                </div>

                <div className="tbl-nngm">

                    <table border='1' width="100%">

                        <tbody>
                            <tr>
                                <td><label>หมายเลขห้อง</label></td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <select>
                                        <option>ประเภทห้อง</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td><label>ราคา</label></td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td><input type='submit' value='ตกลง' /> <input type='button' value='ยกเลิก' /> </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                </form>

            </div>
        )
    }
}
