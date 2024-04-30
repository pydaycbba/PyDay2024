import React from 'react'
import Icons from '../../assets/icons';
import Images from '../../assets/images';

import './footer.css';

const Footer = () => {
  return (
    <footer class="footer">
        <div class="container-logo">
            <div class="cont1">
                <img class="logo1" src={Images.logoPyCbba} alt="" />
                <div class="container_column_contactofooter">
                    <a href="https://www.facebook.com/pythoncbba" target="_blank">
                        <img src={Icons.logoFacebook} alt="" />
                        <span>pythoncbba</span>
                    </a>
                    <a href="https://www.instagram.com/pythoncbba/" target="_blank">
                        <img src={Icons.logoInstagram} alt="" />
                        <span>@pythoncbba</span>
                    </a>
                    <a href="mailto: pythoncochabamba@gmail.com" target="_blank">
                        <img src={Icons.logoEmail} alt="" />
                        <span>pythoncochabamba@gmail.com</span>
                    </a>
                </div>
            </div>
            <div class="cont1">
                <img class="logo2" src={Images.logoPyladies} alt="" />
                <div class="container_column_contactofooter">
                    <a href="https://www.facebook.com/pyladiescbba" target="_blank">
                        <img src={Icons.logoFacebook} alt="" />
                        <span>pyladiescbba</span>
                    </a>
                    <a href="https://www.instagram.com/pyladiescbba/" target="_blank">
                        <img src={Icons.logoInstagram} alt="" />
                        <span>@pyladiescbba</span>
                    </a>
                    <a href="mailto: cochabamba@pyladies.com" target="_blank">
                        <img src={Icons.logoEmail} alt="" />
                        <span>cochabamba@pyladies.com</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
