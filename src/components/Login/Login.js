import React, { Component } from 'react'

import Nav from "../Nav/nav"

import './Login.css'

export default class Login extends Component {

    render() {

        return(
            <div>
                <Nav />
                <div className='con-login'>
                    <div className='txt-title' >
                        Login
                    </div>
                    <div className='box-login'>
                        <div className='box-from' >
                            <div className='input-username' >
                                <input type={"text"} placeholder="Username" />
                            </div>
                            <div>
                                <input type={"password"} placeholder="Password" />
                            </div>
                        </div>

                    </div>
                    <div className='confirm'>
                        <div className='btn-login'> 
                            <button> Login </button>
                        </div>
                        <div className='sig-in'>
                            <button> Sign up </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}