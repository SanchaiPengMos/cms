import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import Login from '../components/Login/Login'
import IndexHome from '../components/Home/home'
import SignUp from '../components/Signup/signup'
import About from '../components/About/about'

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state= {

    }
  }

  handleLogout(){
    console.log("==Logout==")
  }

    render() {
        return (
          <Router>
            <div> 
                <Switch>
                    <Route exact path='/' component={IndexHome} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/sign-up' component={SignUp} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </div>
          </Router>
        )
    }
}
