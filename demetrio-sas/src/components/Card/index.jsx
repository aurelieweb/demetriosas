import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importez useLocation pour obtenir la route actuelle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaucet, faThermometer, faHome } from '@fortawesome/free-solid-svg-icons';

import '../../styles/styles.scss';

function Card({ serviceName, serviceSection, imageUrl }) {
  const location = useLocation(); // Obtenez la route actuelle

  const isNotreSavoirFairePage = location.pathname === '/notre-savoir-faire';

  const icon = isNotreSavoirFairePage
    ? (
      <FontAwesomeIcon
        icon={
          serviceSection === 'plomberie'
            ? faFaucet
            : serviceSection === 'chauffage'
            ? faThermometer
            : faHome
        }
      />
    )
    : (
      <img className="card__image" src={imageUrl} alt={serviceName} />
    );

  const anchorLink = `/notre-savoir-faire#${serviceSection}`;

  return (
    <Link to={anchorLink} className="card-link">
      <div className="card">
        {icon}
        <div className="card__content">
          <h3>{serviceName}</h3>
          <p>+ d'infos</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;

