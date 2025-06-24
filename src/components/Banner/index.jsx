import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../styles/styles.scss';
import bannerImg from '../../assets/imgBanner.jpg';
import Button from '../../components/Button';

/*Fonction Banner*/ 
function Banner({ pageTitle, buttons }) {
  return (
    <div className="banner">
      <img className="banner-image" src={bannerImg} alt="Banner" />
      <div className="banner-content">
        <p>DEMETRIO</p>
        <h1>{pageTitle}</h1>
        <div className="banner__buttons">
          {buttons.map((button, index) => (
            button.link ? (
              <Link key={index} to={button.link}>
                <Button id={`bannerButton-${index}`} className="button" text={button.text} />
              </Link>
            ) : (
              <button
                key={index}
                onClick={button.onClick}
                className="button"
                id={`bannerButton-${index}`}
              >
                {button.text}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
}


export default Banner;
