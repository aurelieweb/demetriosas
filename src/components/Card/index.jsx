import React from 'react';
import { useLocation } from 'react-router-dom'; 
import { HashLink as Link } from 'react-router-hash-link';// Importez useLocation pour obtenir la route actuelle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaucet, faTemperatureHalf, faSeedling  } from '@fortawesome/free-solid-svg-icons';
import '../../styles/styles.scss';

/*Fonction card*/

function Card({ serviceName, serviceSection, imageUrl }) {
  const location = useLocation(); // Obtenez la route actuelle

  const isNotreSavoirFairePage = location.pathname === '/notre-savoir-faire';

  const altText = `Expert ${serviceName} à Thonon, allinges et chablais`;

  const icon = isNotreSavoirFairePage
    ? (
      <FontAwesomeIcon
        icon={
          serviceSection === 'plomberie'
            ? faFaucet
            : serviceSection === 'chauffage'
            ? faTemperatureHalf
            : faSeedling
        }
      />
    )
    : (
      <img className="card__image" src={imageUrl} alt={altText} />
    );

  const anchorLink = `/notre-savoir-faire#${serviceSection}`;

  return (
    <Link to={anchorLink} className="card-link">
      <div className="card">
        <span  className='card-span'>{icon}</span>
        <div className="card__content">
          <h3>{serviceName}</h3>
          <p>+ d'info</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;

