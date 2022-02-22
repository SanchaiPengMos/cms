import { Component } from "react";

import Nav from "../Nav/nav";


import "./home.css"

export default class IndexHome extends Component {

    render() {
        return (
            <div>
                <Nav />
                <div className="top-txt" >
                    <div className="txt-header">
                        <div className="txt-his">
                            <div className="first-txt" >

                                <div className="txt-in-a">
                                    <strong>About Me</strong>
                                    <p>Photo of me :</p>
                                </div>
                                <div className="image-me">

                                </div>

                            </div>
                            <div className="sc-txt" >
                                
                                <div className="txt-in-b">
                                    <strong>Web Layout</strong>
                                    <p></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}