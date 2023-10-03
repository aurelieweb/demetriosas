import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';
import logo from '../../assets/logo.png';
import Menu from '../Menu'; // Importez le composant de menu

//import Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header">
      <div className='header__contact'>
        <div className='header__contact-details'>
          {/*Vérifier la méthode*/}
          <a href="tel:+33457437544"><FontAwesomeIcon icon={faPhone} /> 04 57 43 75 44</a>
          <a href="mailto:contact@demetrio.fr"> <FontAwesomeIcon icon={faEnvelope} />contact@demetrio.fr</a>
        </div>
        <div className='header__contact-media'>
          <a href='https://www.facebook.com/demetrio.cp'><span className='sr-only'>aria-label='Facebook'</span> <FontAwesomeIcon icon={faFacebook} /></a>
          <a href='https://www.instagram.com/demetrio_cp/'><span className='sr-only'> aria-label='Instagram'</span> <FontAwesomeIcon icon={faInstagram} /></a>
          <a href='https://fr.linkedin.com/company/demetrio'><span className='sr-only'> aria-label='Linkedin'</span> <FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo Demetrio, expert plomberie, chauffage et pompe à chaleur" />
        </Link>
        <Menu /> {/* Utilisez le composant de menu ici */}
      </nav>
    </header>
  );
}

export default Header;
