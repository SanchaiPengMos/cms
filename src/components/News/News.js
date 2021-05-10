import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import NewsEdit from './NewsEdit/NewsEdit'
import './News.css'
export default class News extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : 1,
            topic : "News",
            detail : "Detail"
        }
    }


    render() {
        return (
            <Router> 
            <div className="header-news">
                <form>

                <div className="roommns-admin">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member" />
                </div>

                <div className="bnt-news">
                    <button>ข่าวประชาสัมพันธ์</button>
                </div>

                <div className="tbl-news" >

                    <table>
                        <tbody>
                            <tr>
                                <td><input type="text" defaultValue={this.state.topic} /></td>
                                <td>
                                    <Link to={'/'}><button>แก้ไข</button></Link>
                                </td>
                                <td><button>ลบ</button></td>
                            </tr>
                        </tbody>
                    </table>

                    <Switch>
                        <Route exact path='/' component={NewsEdit} />
                    </Switch>

                </div>

                </form>
                
            </div>



            </Router>
        )
    }
}
