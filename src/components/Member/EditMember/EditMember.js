import React, { Component } from 'react'
import axios from 'axios'

import { CgPen } from "react-icons/cg";

import './Editmember.css'

export default class EditMember extends Component {

    constructor(props){
        super(props)
        this.handdleEdit = this.handdleEdit.bind(this)

        this.state = {
            email: "",
            firstname:"",
            lastname:"",
            tel:""
        }
    }

    handdleEdit(){
        const data = {
            firstname:this.state.firstname,
            lastname: this.state.lastname,
            tel: this.state.tel
    
        } 
    
          const configedit = {
            headers: {
              Authorization : localStorage.getItem('token'),
              'Content-Type': 'application/json'
            }
          }
          
          axios.put(`edituser/${this.props.id}`,JSON.stringify(data),configedit)
    
          .then(function (res) {
    
            console.log(res)
            alert("แก้ไขข้อมูลสำเสร็จ")
    
          })
          .catch(function (error) {
    
            console.log(error);
          
          });  
          
          
    }

    render() {

        console.log("1213",this.props.firstname)

        if (this.props.id){
            console.log("EditMember",this.props.id)

            return (
                <div>
                    <form onSubmit={this.handdleEdit}>
                        <br />
                        <input name="firstname"
                        type="text" 
                        className="form-edit"  
                        value={this.props.firstname}
                        placeholder="ชื่อ" 
                        onChange={e => this.setState({ firstname: e.target.value })} /> <br />

                    <input name="lastname"
                        type="text" 
                        className="form-edit"  
                        value={this.props.lastname}
                        placeholder="นามสกุล" 
                        onChange={e => this.setState({ lastname: e.target.value })} /> <br />

                    <input name="tel"
                        type="text" 
                        className="form-edit" 
                        placeholder="เบอร์โทรศัพท์" 
                        value={this.props.tel}
                        onChange={e => this.setState({ tel: e.target.value })} /> <br />
                    
                    <button onClick={this.handdleEdit}>< CgPen /></button>


                    </form>

                </div>            
            )
        }
        
        return (
            <div />
        )
    }
}