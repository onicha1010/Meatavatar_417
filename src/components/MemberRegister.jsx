import React from 'react';
import '../CSS/memberrigester.css';
import { Link } from 'react-router-dom';

function memberrigester() {
  return (
    <div className="member_container">
        <div className="memberheaderimg">
        <div className="imagecon">
        <img src="https://media.discordapp.net/attachments/445928139021877259/1181605849790161008/image_40.png?ex=6581ab33&is=656f3633&hm=4ce7f3e76cea5d941325a9c837d318a7dc0f6b12e7b6af8e0e2d33dae0fee6b5&=&format=webp&quality=lossless" alt="register member" />
        <u>ลงทะเบียนสมาชิก</u>
        </div>
        <div className="imagecon">
        <img  src="https://media.discordapp.net/attachments/445928139021877259/1181605849433649282/image_48.png?ex=6581ab33&is=656f3633&hm=cb98fa8f9aa1651f6efd6e4f30862f0b87446b9c81d5b0322cfe1eeb154e7a6e&=&format=webp&quality=lossless" alt="benefit point" />
        <p>สะสมแต้มรับสิทธิประโยชน์</p>
        </div>
    </div>
    <div className="registermem">
    <div className="line">
    <img  src="https://media.discordapp.net/attachments/884286238469804092/1186740340514881657/poster_3_page-0001.jpg?ex=65945911&is=6581e411&hm=03af83551a778ac1fd41aa62d9e7eeb44a71938840e0d5480ffad978ecf81e36&=&format=webp&width=478&height=676" alt="Line add friend link" />

    </div>
    
    <div className="registerbox">
        <p>ลงทะเบียนสมาชิก</p>
        <p style={{marginBottom:30}}>สมัครสมาชิกง่ายๆ เพียงแอด line : Meat avatar หรือคลิกลงทะเบียน</p>
        <div className="doublebutton">
          <Link to="/sign-up"><button>ลงทะเบียน</button></Link>
            <button><a aria-label="Line meatavatar link" href="https://line.me/R/ti/p/@267ptstd?oat_content=qr">Line : Meat Avater</a></button>
        </div>
    </div>
    </div>
    </div>
  );
}

export default memberrigester;
