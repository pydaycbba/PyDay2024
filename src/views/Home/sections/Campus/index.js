import React from 'react'
import Images from '../../../../assets/images';
import RRSS from '../../../../constants'
import Icons from '../../../../assets/icons';
import './campus.css';

const Communities = () => {
    return (
        <section id='Campus'>
            <div className='div_campus'>
                <h1>Sede del Evento</h1>
                <div className="container-campus">
                    <div className='container-logo-campus'>
                        
                    </div>
                    <div className='container-RRSS-campus'>
                        <a href={RRSS.facebookUcatec.url} target='_blank'>
                            <img src={Icons.logoFacebook} alt="Facebook" />
                        </a>
                        <a href={RRSS.instagramUcatec.url} target='_blank'>
                            <img src={Icons.logoInstagram} alt="Instagram" />
                        </a>
                        <a href={RRSS.paginaUcatec.url} target='_blank'>
                            <img src={Icons.logoEmail} alt="Email" />
                        </a>
                        <a href={RRSS.ubiUcatec.url} target='_blank'>
                            <img src={Icons.logoLocations} alt="Página" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Communities;