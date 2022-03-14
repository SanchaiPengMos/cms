import React, { Component } from 'react'

import Nav from "../Nav/nav"

import { apiLogin } from '../../service/api/Login';

import './Login.css'

export default class Login extends Component {

    constructor(props){
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = e => {

        e.preventDefault();

      const data  = {
            email : this.email,
            password: this.password,
        };

        
        apiLogin(data)
            .then((res) => {

                // console.log(data)
                localStorage.setItem('result',res.data.result)
                // console.log(localStorage.getItem('result',res.data.result))
                alert("เข้าสู่เรียบร้อยแล้ว")
                window.location.assign("http://localhost:3000/home") 

            } )
            .catch((err) => {
                console.log(err)
                
                alert("กรุณาเข้าสู่ระบบใหม่อีกครั้ง")
                window.location.assign("http://localhost:3000/")
                

            } )
      

    
    };


    render() {

        return(
            <div >
                {/* <Nav /> */}
                <div className="row">
                    
                    <div className="col">
                    
                    <form onSubmit={this.handleLogin}  >

                        <div className="form-group">
                            <label >Email</label>
                            <input
                            type="email"
                            name="email"
                            onChange={e => this.email = e.target.value} 
                            className="form-control" 
                            placeholder="Email"
                            required />

                            <label>Password</label>
                            <input 
                            type="password"
                            name="password"
                            onChange={e => this.password = e.target.value} 
                            className="form-control" 
                            placeholder="Password"
                            required />
                            <input type="submit" value="Login" />
                        </div>      
                            
                    </form>
                  
                    </div>
                    
            </div>
            </div>
        )
    }

}