// components/ModalIntervention.js
import React from 'react';
import DevisForm from '../../components/DevisForm';

const ModalIntervention = ({ isOpen, onClose, questions }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <DevisForm questions={questions} />
      </div>
    </div>
  );
};

export default ModalIntervention;
