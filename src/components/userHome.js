import React, { Component, useEffect, useState } from "react";
import Menubra from './Menubra'
import Banner from './Banner'
import Footer from './Footers'
import Journey from './Journey'
import IntroProduct from './IntroProduct'
import Imagebrand from './Imagebrand'
import Partner from './Partner'
import Level from './Level'
import "../CSS/Userhome.css";



export default function UserHome() {

  return (
    <div className="wrapper">
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Menubra/>
        <IntroProduct/>
        <div className="journey-header">
                <p>FOLLOW  OUR  JOURNEYS</p>
            </div>
        <Journey/>
        <Imagebrand/>
        <p className="large_font">สิทธิประโยชน์พิเศษเมื่อเป็นสมาชิก</p>
        <Level/>
        <Partner/>
      </div>
    <Footer/>
    </div>
    </div>
  );
}
