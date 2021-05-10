import React, { Component } from 'react'
import BannerEdit from './Banner/BannerEdit'
import { IoTrashOutline } from "react-icons/io5";
import { CgPen } from "react-icons/cg";

import './BannerAdmin.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' 
export default class BannerAdmin extends Component {
    
    constructor(props) {
        super(props)
        this.state= {
            hasError: false,
            url: {}
        }
    }

    render() {
        return (
            <Router>
            <div className="banner-admin">

                <div className="roommns-admin">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member" />
                </div> 

                <div className="roommng">
                    <button>แบนเนอร์</button>
                </div>

                <form>

                    <div className="tbl-headbanner">
                        <p>แบนเนอร์ส่วนหัว</p>
                        <table border="1" width="100%">

                            <tbody>

                                <tr>
                                    <td width="50%">รุปภาพ</td>
                                    <td width="20%">ชื่อรูปภาพ</td>
                                    <td width="20%">Action</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img src="https://cache.marriott.com/marriottassets/marriott/BKKWB/bkkwb-exterior-7758-hor-feat.jpg" alt=""  width="50%"/>
                                    </td>
                                    <td>
                                        <p>HeaderBanner</p>
                                    </td>
                                    <td>
                                        <Link to={'/'}> <CgPen /></Link>
                                        <IoTrashOutline />
                                    </td>
                                </tr>
                                
                            </tbody>

                        </table>

                    </div>

                    <div className="tbl-banneradmin">
                        <p>แบนเนอร์สไลด์</p>
                        <table border="1" width='100%'>
                            <tbody>
                                <tr>
                                    <td width="30%">รุปภาพ</td>
                                    <td width="20%">ชื่อรูปภาพ</td>
                                    <td width="20%">Action</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/282/2018/04/23070030/Room-1.jpg"  alt="img room" />
                                    </td>
                                    <td>
                                        <p>Banner 1</p>
                                    </td>
                                    <td>
                                        <Link to={'/'}> <CgPen /></Link>
                                        <IoTrashOutline />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    <Switch>
                        <Route exact path='/' component={BannerEdit} />
                    </Switch>

                    </div>
                </form>
            </div> 
            </Router>
        )
    }
}
