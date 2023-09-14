import React from 'react';
import '../../styles/styles.scss';
import bannerImg from '../../assets/homeBanner.jpg';
import Button from '../Button';

function Banner({ pageTitle }) {
  return (
    <div className="banner">
      <img className="banner-image" src={bannerImg} alt="Banner" />
      <div className="banner-content">
        <p>DEMETRIO</p>
        <h1>{pageTitle}</h1>
        <Button text="Devis en ligne" /> {/* Texte du bouton passé en tant que prop */}
      </div>
    </div>
  );
}

export default Banner;
