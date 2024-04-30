import React from 'react'
import Icons from '../../../../assets/icons';
import RRSS from '../../../../constants'
import Images from '../../../../assets/images';

import './contact.css'; 

const Contact = () => {
  return (
    <div className='contact'>
        <section id='Contact' className='Contact'>
            <div className='title'>
                <h1>Contáctanos</h1>
            </div>
            <div className='container_row_contact'>
                <img src={Images.pydayCbbaOriginal} alt="PyDay Cbba" />
                <div className='container_column_contact'>
                    <a href={RRSS.facebook.url} target='_blank'>
                        <img src={Icons.logoFacebook} alt="Facebook" />
                        <span>{RRSS.facebook.laber}</span>
                    </a>
                    <a href={RRSS.instagram.url} target='_blank'>
                        <img src={Icons.logoInstagram} alt="Instagram" />
                        <span>RRSS.instagram.laber</span>
                    </a>
                    <a href={RRSS.email.url} target='_blank'>
                        <img src={Icons.logoEmail} alt="Email" />
                        <span>{RRSS.email.laber}</span>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact;
