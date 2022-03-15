import { Component } from 'react';
import { NavLink } from 'react-router-dom'

import "./nav.css"

export default class Nav extends Component {

    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
      }



    handleLogout = () => {

        localStorage.removeItem("result")        
        alert("ออกจากระบบเรียบร้อยแล้ว")
            
        window.location.assign("http://localhost:3000")  
        
    }

    render() {
        return (
            <div className="continner">
                {/* <div className='txt-nav'>
                    <p> ITS441/SWE444 Web Design and Programming </p>
                </div> */}
                <div className="list-ul">
                    <div className="list-li">
                        <ul className="ul-head">
                            <li>
                                <b>@ITDI</b>
                            </li>
                            <NavLink to={'/home'}>
                                <li className='btnthird' >
                                    Overview
                                </li>
                            </NavLink>
                            <NavLink to ={'/shop'}>
                                <li className='btnthird'>
                                    Shop
                                </li>
                            </NavLink>
                            {/* <NavLink to={'/sign-up'}>
                                <li className='btnthird'>
                                    Sign up
                                </li>
                            </NavLink> */}
                            <NavLink to={'/about'}>
                                <li className='btnthird' >
                                    About
                                </li>
                            </NavLink>
                            <NavLink to={'/'}>
                                <li className='btnthird' onClick={this.handleLogout} >
                                    Logout
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}