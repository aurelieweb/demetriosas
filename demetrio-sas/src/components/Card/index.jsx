import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';


/*
- Réflechir méthode pour récupérer image et nom de service
- Mettre du style
*/

function Card({serviceName, serviceSection, imageUrl}) {

  const anchorLink = `/notre-savoir-faire#${serviceSection}`;

  return (
    <Link to={anchorLink} className="card-link"> {/* Utilisation de l'ancre #plomberie */}
      <div className="card">
        <img className="card__image" src={imageUrl} alt={serviceName} /> {/* Utilisation d'un texte alternatif */}
        <div className="card__content">
          <h3>{serviceName}</h3>
          <p>+ d'infos</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
