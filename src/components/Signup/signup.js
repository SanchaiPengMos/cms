import { Component } from "react";

import Nav from "../Nav/nav";

import "./signup.css"

export default class SignUp extends Component {
    render() {
        return (
             <div className="fx-n">
                 <Nav />
                 <div className="sign-up">
                     <div className="input-signup">
                            <div className="from-data">
                                <div className="input-username">
                                    <input type="text" placeholder="Username" required />
                                </div>
                                <div className="input-password">
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div className="confirm-password">
                                    <input type="password" placeholder="confirm password" required />
                                </div>
                            </div>
                            <div className="submitdata">
                                <button> Sign Up </button>
                            </div>
                     </div>

                 </div>

             </div>
        );
    }
}