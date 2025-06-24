import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Base de données des témoignages
const adviceData = [
  { 
    name: 'Claire B.',
    advice: 'J’avais une fuite un dimanche soir… L’équipe Demetrio a été réactive et professionnelle. Intervention rapide, pas de surcoût abusif comme on le voit souvent ailleurs. Merci pour votre honnêteté !',
    note: 5,
    date: '12 mai 2024'
  },
  { 
    name: 'David M.',
    advice: 'J’ai fait appel à Demetrio pour refaire toute la plomberie de ma maison. Travail propre, dans les temps, et surtout très bien expliqué. Un artisan sérieux, ça devient rare !',
    note: 5,
    date: '28 avril 2024'
  },
  { 
    name: 'Sophie G.',
    advice: 'J’étais méfiante à cause de mauvaises expériences passées. Là, tout était clair dès le départ : devis détaillé, prix annoncé respecté, et le plombier était ponctuel. Je recommande vivement.',
    note: 5,
    date: '3 mars 2024'
  },
  { 
    name: 'Julien P.',
    advice: 'Remplacement d’un ballon d’eau chaude. Intervention rapide et efficace, et on m’a même donné des conseils pour l’entretien. Très bon contact humain, je referai appel à eux les yeux fermés.',
    note: 4,
    date: '17 février 2024'
  }
];

// Fonction pour afficher les étoiles
function renderStars(note) {
  return Array(5).fill(0).map((_, index) => (
    <FontAwesomeIcon 
      key={index} 
      icon={faStar} 
      className={index < note ? 'star-filled' : 'star-empty'}
    />
  ));
}

function Testimonies() {
  const [expanded, setExpanded] = useState({}); // Stocke l'état d'expansion pour chaque témoignage

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index] // Inverse l'état pour cet index
    }));
  };

  const MAX_LENGTH = 100; // Longueur maximale pour le texte réduit

  return (
    <section className='Testimonies'>
      <h2>Avis clients : <br/>Plomberie, chauffage et pompe à chaleur à Thonon et dans le Chablais</h2>
    <div className='advice-container'>
      
      {adviceData.map((testimonial, index) => {
        const isExpanded = expanded[index]; // Vérifie si le texte est actuellement étendu
        const shouldShowExpandButton = testimonial.advice.length > MAX_LENGTH;

        return (
          <div key={index} className="testimonial-item">
            <p className="testimonial-text">
              {isExpanded ? testimonial.advice : `${testimonial.advice.slice(0, MAX_LENGTH)}...`}
              {shouldShowExpandButton && (
                <span 
                  className="toggle-button" 
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? " Lire moins" : " Lire plus"}
                </span>
              )}
            </p>
            <p className="testimonial-author">
              <strong>{testimonial.name}</strong> - <em>{testimonial.date}</em>
            </p>
            <div className="testimonial-stars">
              {renderStars(testimonial.note)} {/* Affichage des étoiles */}
            </div>
          </div>
        );
      })}
    </div>
    </section>
  );
}

export default Testimonies;
