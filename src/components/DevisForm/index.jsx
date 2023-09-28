import React, { useState } from 'react';

function DevisForm({ questions }) {
  // État local pour stocker les réponses aux questions
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentStep === 1) {
      // Vérifier si l'utilisateur a répondu à toutes les questions
      if (Object.keys(answers).length === questions.length) {
        // L'utilisateur a répondu à toutes les questions
        // Vous pouvez traiter les réponses ici si nécessaire

        // Passer à l'étape suivante
        setCurrentStep(2);
      } else {
        alert('Veuillez répondre à toutes les questions.');
      }
    } else if (currentStep === 2) {
      // L'utilisateur a terminé l'étape 2 (compléter le message)
      // Vous pouvez traiter le message ici si nécessaire

      // Passer à l'étape suivante
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // L'utilisateur a terminé l'étape 3 (compléter les coordonnées)
      // Vous pouvez traiter les coordonnées ici si nécessaire

      // Réinitialiser les réponses et revenir à l'étape 1
      setAnswers({});
      setCurrentStep(1);

   // Envoi des données au serveur Express
   fetch('/envoyer-devis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(answers),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Réponse du serveur :', data);
      // Vous pouvez ajouter une logique pour gérer la réponse du serveur ici
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi de la requête :', error);
      // Vous pouvez gérer les erreurs ici
    });
  }
};

  // Fonction pour gérer le changement de réponse
  const handleAnswerChange = (questionIndex, answer) => {
    // Mettez à jour les réponses
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  // Rendu en fonction de l'étape actuelle
  let stepContent;
  if (currentStep === 1) {
    // Étape 1 : Répondre aux questions
    stepContent = (
      <div>
        {questions.map((question, index) => (
          <div className='devis__form-questions' key={index}>
            <label htmlFor={`question-${index}`}>
              {question.question}
            </label>
            <select
              id={`question-${index}`}
              value={answers[index] || ''}
              onChange={(e) =>
                handleAnswerChange(index, e.target.value)
              }
              required
            >
              <option value="">Sélectionnez une réponse</option>
              {question.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    );
  } else if (currentStep === 2) {
    // Étape 2 : Compléter le message
    stepContent = (
      <div>
        <label htmlFor="message">Pouvez-vous nous en dire plus au sujet de votre demande :</label>
        <textarea
          id="message"
          value={answers.message || ''}
          onChange={(e) =>
            setAnswers({ ...answers, message: e.target.value })
          }
          required
        />
      </div>
    );
  } else if (currentStep === 3) {
    // Étape 3 : Compléter les coordonnées
    stepContent = (
      <div>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail :</label>
          <input
            type="email"
            id="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Numéro de téléphone :</label>
          <input
            type="tel"
            id="telephone"
            className="form-control"
            required
          />
          {/* Ajoutez ici les autres champs pour les coordonnées */}
        </div>
        <div className="form-group">
          <label htmlFor="adress">Adresse de l'intervention :</label>
          <input
            type="adress"
            id="adress"
            className="form-control"
            required
          />
          {/* Ajoutez ici les autres champs pour les coordonnées */}
        </div>
      </div>
    );
  }

  return (
    <div className='devis__container-form'>
      <h3 id='devis__form-title'>Devis en Ligne</h3>
      <form id='devis__form-anchor' className='devis__form' onSubmit={handleSubmit}>
        {stepContent}
        <button type="submit">
          {currentStep === 3 ? 'Valider' : 'Suivant'}
        </button>
      </form>
    </div>
  );
}

export default DevisForm;

