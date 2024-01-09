import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../styles/styles.scss';
import bannerImg from '../../assets/imgBanner.jpg';
import Button from '../Button';

/*Fonction Banner*/ 
function Banner({ pageTitle }) {
  return (
    <div className="banner">
      <img className="banner-image" src={bannerImg} alt="Banner" />
      <div className="banner-content">
        <p>DEMETRIO</p>
        <h1>{pageTitle}</h1>
        <Link to='/devis-en-ligne#devis__form-anchor'>
          <Button id="bannerButton" text="Devis en ligne" />
        </Link>
      </div>
    </div>
  );
}

export default Banner;
