
import React, { Component } from 'react'
import './RoomtypeEdit.css'
import  axios from "axios";
export default class RoomtypeEdit extends Component {

    constructor(props) {
        super(props)
        this.state= {
            selectedFile: null
        }
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
        axios.post('' , fd , {
            onUploadProgress: progresEvent => {
                console.log('Upload Progress' + Math.round(progresEvent.loaded / progresEvent.total) *100+ '%')
            }
        })
            .then(res =>{
                console.log(res);  
            });
        
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
                       
                                <th>
                                    <div className="input-file">
                                        <input type="file" onChange={this.fileSelectedHandler} />
                                    </div>
                                </th>
                           
                        </thead>
                        <tbody>
                            <tr>
                                <td><label>ประเภทห้อง</label></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>รายละเอียด</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <button onClick={this.fileUploadHandler}>Upload</button> 
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

