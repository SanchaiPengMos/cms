import { Component } from 'react';
import { NavLink } from 'react-router-dom'

import "./nav.css"

export default class Nav extends Component {

    render() {
        return (
            <div className="continner">
                <div className='txt-nav'>
                    <p> ITS441/SWE444 Web Design and Programming </p>
                </div>
                <div className="list-ul">
                    <div className="list-li">
                        <ul className="ul-head">
                            <li>
                                <b>@ITDI</b>
                            </li>
                            <NavLink to={'/'}>
                                <li className='btnthird' >
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to={'/sign-up'}>
                                <li className='btnthird'>
                                    Sign up
                                </li>
                            </NavLink>
                            <NavLink to={'/about'}>
                                <li className='btnthird' >
                                    About
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}