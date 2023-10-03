import React from 'react';
import '../../styles/styles.scss';
import Menu from '../Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__media'>
            <a href='https://www.facebook.com/demetrio.cp'><span className='sr-only'>aria-label='Facebook'</span> <FontAwesomeIcon icon={faFacebook} /></a>
            <a href='https://www.instagram.com/demetrio_cp/'><span className='sr-only'> aria-label='Instagram'</span> <FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://fr.linkedin.com/company/demetrio'><span className='sr-only'> aria-label='Linkedin'</span> <FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <Menu />
            <p>Copyright 2023. Designed by ADW</p>
        </footer>
    )
}

export default Footer;