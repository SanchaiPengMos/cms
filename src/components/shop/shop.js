import { Component } from "react";
import Nav from "../Nav/nav";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "./shop.css"
import "antd/dist/antd.css";
// import "./core.scss";
// import "./charginghistory.scss";
import {
  Switch,
} from "antd";

export default class Shop extends Component {
constructor(props) {
  super(props);
  this.state = {
    file: '',
    imagePreviewUrl: '',
    oos:false,
};
}

statusShop = (value) => {
  
  this.setState({ oos: value });
  
  
}

_handleSubmit(e) {
  e.preventDefault();
  // TODO: do something with -> this.state.file
  console.log('handle uploading-', this.state.file);
}

_handleImageChange(e) {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
    });
  }

  reader.readAsDataURL(file)
}

render() {
  let {imagePreviewUrl} = this.state;
  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = (<img src={imagePreviewUrl} />);
  } else {
    $imagePreview = (<div className="tpview" ><div className="previewText">Please select an Image for Preview</div></div>);
  }

  return (
    <div className="fx-n">
      <Nav />
      <div className="previewComponent">
      <div className="im-view" >
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
      <form onSubmit={(e)=>this._handleSubmit(e)}>

      <div className="box-re">
        <Switch
          className="switch-charger"
          checked={this.state.oos}
          checkedChildren={("Close")}
          unCheckedChildren={("Open")}
          onChange={(value) => {
            this.statusShop(value);  
          }}
        />
        </div>
      <div className="f-rabc" >
        <div className="form-register">
          <div className="input-img" >
              <input className="fileInput" 
                type="file" 
                onChange={(e)=>this._handleImageChange(e)} />
            </div>

            <div className="input-nameshop">
              <div className="la-name" ><label> ชื่อร้าน : </label></div>
              <input className="fileinput" type="text" />
            </div>

            <div className="input-nameshop">
              <div className="la-name" ><label> รายละเอียด : </label></div>
              <input className="fileinput" type="text" />
            </div>

            <div className="input-namemanager">
              <div className="la-name" ><label> ชื่อเจ้าของร้าน : </label></div>
              <input className="fileinput" type="text" />
            </div>

            <div className="input-tel">
              <div className="la-name"><label> โทร : </label></div>
              <input className="fileinput" type="text" />
            </div>

            <div className="input-contact">
            {/* <label> ที่ตั้ง </label> */}
              <div className="contact-address" >
                <div className="la-name"><label>ที่อยู่ : </label></div>
                <input className="fileinput" type="text" />
              </div>
              <div className="tumbone" >
                <div className="la-name"><label>ตำบล : </label></div>
                <input className="fileinput" type="text" />
              </div>
              <div className="amper">
                <div className="la-name"><label>อำเภอ : </label></div>
                <input className="fileinput" type="text" />
              </div>
              <div className="jawad" >
                <div className="la-name"><label>จังหวัด : </label></div>
                <input className="fileinput" type="text" />
              </div>
              <div className="zipcode" >
                <div className="la-name"><label>รหัสไปรษณี : </label></div>
                <input className="fileinput" type="text" />
              </div>
              <div className="lat" >
                <div className="la-name"><label>Lat : </label></div>
                <input className="fileinput" type="text" />
              </div>
              <div className="long" >
                <div className="la-name"><label>Long : </label></div>
                <input className="fileinput" type="text" />
              </div>
            </div>
            <div className="btn-update-data">
            <button className="submitButton" 
                  type="submit" 
                  onClick={(e)=>this._handleSubmit(e)}>Upload</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}
}