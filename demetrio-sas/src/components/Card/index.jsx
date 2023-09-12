import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';
import ServiceImg from '../../assets/test.jpeg';

/*
- Réflechir méthode pour récupérer image et nom de service
- Mettre du style
*/

function Card() {
  return (
    <Link to="/notre-savoir-faire#plomberie" className="card-link"> {/* Utilisation de l'ancre #plomberie */}
      <div className="card">
        <img className="card__image" src={ServiceImg} alt="Plomberie" /> {/* Utilisation d'un texte alternatif */}
        <div className="card__content">
          <h3>Plomberie</h3>
          <p>+ d'infos</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
