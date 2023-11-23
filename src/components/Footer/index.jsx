import React from 'react';
import '../../styles/styles.scss';
import Menu from '../Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='footer'>
            <Menu />
            <div className='footer__media'>
                <span className='span-media'><a href='https://www.facebook.com/demetrio.cp'><span className='sr-only'>aria-label='Facebook'</span> <FontAwesomeIcon icon={faFacebookF} /></a></span>
                <span className='span-media'><a href='https://www.instagram.com/demetrio_cp/'><span className='sr-only'> aria-label='Instagram'</span> <FontAwesomeIcon icon={faInstagram} /></a></span>
                <span className='span-media'><a href='https://fr.linkedin.com/company/demetrio'><span className='sr-only'> aria-label='Linkedin'</span> <FontAwesomeIcon icon={faLinkedinIn} /></a></span>
            </div>
            <p>Copyright 2023. Designed by ad. L'agence Digitale</p>
        </footer>
    )
}

export default Footer;