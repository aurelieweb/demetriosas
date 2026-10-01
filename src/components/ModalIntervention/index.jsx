// components/ModalIntervention.js
import React, { useEffect } from 'react';
import DevisForm from '../../components/DevisForm';
import Logo from '../../assets/logo.png';

const ModalIntervention = ({ isOpen, onClose, questions }) => {
  // Fermeture avec touche Échap
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
        >
          ×
        </button>

        <div className="modal-text">
          <img src={Logo} alt="Logo Demetrio" className="modal-logo" />

          <p>
            Demande d’intervention rapide en ligne : dépannage, entretien ou installation.<br />
            Obtenez une réponse sous 24h et planifiez votre intervention simplement.
          </p>
        </div>

        <DevisForm questions={questions} />
      </div>
    </div>
  );
};

export default ModalIntervention;