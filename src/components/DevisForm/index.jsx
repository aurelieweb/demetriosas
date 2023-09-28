import React, { useState } from 'react';
import emailjs from 'emailjs-com';


function DevisForm({ questions }) {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    ville: '',
    email: '',
    telephone: '',
  });

//ecouteur  d'évenement
  const handleSubmit = (e) => {
    e.preventDefault();

//gestion des étapes du module de devis
    if (currentStep === 1) {
      if (Object.keys(answers).length === questions.length) {
        setCurrentStep(2);
      } else {
        alert('Veuillez répondre à toutes les questions.');
      }
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Envoyer les réponses par email
      const emailParams = {
        to_email: 'contact@demetrio.fr', // Adresse email de destination
        ...userData,
        message: answers.message || 'N/A',
        question: answers.question || 'N/A',
      };

//Ajout des question à emailParams
      questions.forEach((question, index) => {
        emailParams[`question_${index + 1}`] = answers[index] || 'N/A';
      });

//envoi de la demande par mail
      emailjs.send('service_00eietb', 'template_wnv4yi8', emailParams, 'EdXgcOwIk3gngd0yn')
        .then((response) => {
          console.log('Email envoyé avec succès :', response);
          // Vous pouvez ajouter une logique pour gérer la réponse ici
        })
        .catch((error) => {
          console.error('Erreur lors de l\'envoi de l\'email :', error);
          // Vous pouvez gérer les erreurs ici
        });
    }
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };
  
  const handleFieldChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
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
            handleAnswerChange('message', e.target.value) // Utilisez une clé 'message'
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
    value={userData.nom || ''}
    onChange={(e) => handleFieldChange('nom', e.target.value)}
    required
  />
</div>

<div className="form-group">
  <label htmlFor="prenom">Prénom :</label>
  <input
    type="text"
    id="prenom"
    className="form-control"
    value={userData.prenom || ''}
    onChange={(e) => handleFieldChange('prenom', e.target.value)}
    required
  />
</div>

<div className="form-group">
  <label htmlFor="email">E-mail :</label>
  <input
    type="email"
    id="email"
    className="form-control"
    value={userData.email || ''}
    onChange={(e) => handleFieldChange('email', e.target.value)}
    required
  />
</div>

<div className="form-group">
  <label htmlFor="telephone">Numéro de téléphone :</label>
  <input
    type="tel"
    id="telephone"
    className="form-control"
    value={userData.telephone || ''}
    onChange={(e) => handleFieldChange('telephone', e.target.value)}
    required
  />
</div>

<div className="form-group">
  <label htmlFor="adresse">Adresse de l'intervention :</label>
  <input
    type="text"
    id="adresse"
    className="form-control"
    value={userData.adresse || ''}
    onChange={(e) => handleFieldChange('adresse', e.target.value)}
    required
  />
</div>

<div className="form-group">
  <label htmlFor="ville">Ville :</label>
  <input
    type="text"
    id="ville"
    className="form-control"
    value={userData.ville || ''}
    onChange={(e) => handleFieldChange('ville', e.target.value)}
    required
  />
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
