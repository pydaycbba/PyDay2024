import React from "react";
import Icons from "../../assets/icons";
import RRSS from "../../constants";
import Images from "../../assets/images";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id='Contact'>
      <h2 className="title">Contáctanos</h2>
      <div className="cont">
        <img src={Images.pydayCbbaOriginal} alt="PyDay Cbba" />
        <div className="cont-icon">
          <a href={RRSS.facebook.url} target="_blank" rel="noreferrer">
            <img src={Icons.logoFacebook} alt="Facebook" />
            <span>{RRSS.facebook.laber}</span>
          </a>
          <a href={RRSS.instagram.url} target="_blank" rel="noreferrer">
            <img src={Icons.logoInstagram} alt="Instagram" />
            <span>{RRSS.instagram.laber}</span>
          </a>
          <a href={RRSS.email.url} target="_blank" rel="noreferrer">
            <img src={Icons.logoEmail} alt="Email" />
            <span>{RRSS.email.laber}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
