import React, { useState } from 'react';
import ModalIntervention from '../../components/ModalIntervention';

function CtaSection({ title, text, buttonLabel, questions }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-text">{text}</p>
          <button
            className="cta-button"
            onClick={() => setIsModalOpen(true)}
          >
            {buttonLabel}
          </button>
        </div>
      </section>

      <ModalIntervention
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        questions={questions}
      />
    </>
  );
}

export default CtaSection;
