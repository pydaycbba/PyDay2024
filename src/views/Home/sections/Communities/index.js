import React from 'react'
import Images from '../../../../assets/images';
import Icons from '../../../../assets/icons';
import './communities.css';

const Communities = () => {
    return (
        <section className='div_Communities' id='Communities'>
            <h1>Comunidades Organizadoras</h1>
            <div className="container-communities">
                <div className="container-community">
                    <img className="community-logo-1" src={Images.logoPyCbba} alt="" />
                    <div className="community-data">
                        <a href="https://www.facebook.com/pythoncbba" target="_blank" rel="noreferrer">
                            <img src={Icons.logoFacebook} alt="" />
                            <span>pythoncbba</span>
                        </a>
                        <a href="https://www.instagram.com/pythoncbba/" target="_blank" rel="noreferrer">
                            <img src={Icons.logoInstagram} alt="" />
                            <span>@pythoncbba</span>
                        </a>
                        <a href="mailto: pythoncochabamba@gmail.com" target="_blank" rel="noreferrer">
                            <img src={Icons.logoEmail} alt="" />
                            <span>pythoncochabamba@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className="container-community">
                    <img className="community-logo-2" src={Images.logoPyladies} alt="" />
                    <div className="community-data">
                        <a href="https://www.facebook.com/pyladiescbba" target="_blank" rel="noreferrer">
                            <img src={Icons.logoFacebook} alt="" />
                            <span>pyladiescbba</span>
                        </a>
                        <a href="https://www.instagram.com/pyladiescbba/" target="_blank" rel="noreferrer">
                            <img src={Icons.logoInstagram} alt="" />
                            <span>@pyladiescbba</span>
                        </a>
                        <a href="mailto: cochabamba@pyladies.com" target="_blank" rel="noreferrer">
                            <img src={Icons.logoEmail} alt="" />
                            <span>cochabamba@pyladies.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Communities;