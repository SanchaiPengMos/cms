import { Component } from "react";

import Nav from "../Nav/nav";


import "./home.css"

export default class IndexHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgshop:"",
            namemanager:"Default",
            nameshop:"Default",
            discriptionshop:"Default",
            tel:"Default",
            address:"240/7 หมู่9",
            tb:"น้ำรึม",
            amp:"เมืองตาก",
            prov:"ตาก",
            zipcode:"63000",
            lat:0,
            long:0,
      };
      }

    render() {
        return (
            <div className="fx-n">
                <Nav />
                <div className="overview">
                    <div  className="txt-overview">
                        <div className="txt-des" >
                        <div className="nmenag" >
                                ชื่อร้าน : {this.state.nameshop}
                            </div>
                            <div className="nmenag" >
                                ชื่อเจ้าของร้าน : {this.state.namemanager}
                            </div>
                            <div className="nmenag" >
                                รายละเอียด : {this.state.discriptionshop}
                            </div>
                            <div className="nmenag" >
                                โทร : {this.state.tel}
                            </div>
                            <div className="nmenag" >
                                ที่ตั้ง : {this.state.address}
                            </div>
                            <div className="nmenag" >
                                ตำบล : {this.state.tb}
                            </div>
                            <div className="nmenag" >
                                อำเภอ : {this.state.amp}
                            </div>
                            <div className="nmenag" >
                                จังหวัด : {this.state.prov}
                            </div>
                            <div className="nmenag" >
                                ไปรษณี : {this.state.zipcode}
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}