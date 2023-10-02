import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Step1({ questions, answers, handleAnswerChange }) {
  return (
<div>
  {questions.map((question) => (
    <div className='devis__form-questions' key={question.id}>
      <label htmlFor={`question-${question.id}`}>
        {question.question}
      </label>
      <select
        id={`question-${question.id}`}
        value={answers[question.id] || ''}
        onChange={(e) =>
          handleAnswerChange(question.id, e.target.value)
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
}

function Step2({ answers, handleAnswerChange }) {
  return (
    <div>
      <label htmlFor="message">Pouvez-vous nous en dire plus au sujet de votre demande :</label>
      <textarea
        id="message"
        value={answers.message || ''}
        onChange={(e) =>
          handleAnswerChange('message', e.target.value)
        }
        required
      />
    </div>
  );
}

function Step3({ userData, handleFieldChange }) {
  return (
    <div className='form'>
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

//Function sendMail
function DevisForm({ questions }) {

  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    ville: '',
    email: '',
    telephone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
    
  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };
    
  const handleFieldChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
      
    // Envoyer les réponses par email
    const emailParams = {
      to_email: 'contact@demetrio.fr', // Adresse email de destination
      ...userData,
      message: answers.message || 'N/A',
    };
    
    // Ajouter les réponses aux questions à emailParams en utilisant les ID des questions
    questions.forEach((question) => {
      const answer = answers[question.id] || 'N/A';
      console.log(`Question ${question.id}: ${answer}`);
      emailParams[`question_${question.id}`] = answer;
    });

    // Vérification des datas
    console.log('EmailParams:', emailParams);
    
    // Envoi de la demande par mail
    const emailUserId = process.env.REACT_APP_EMAILJS_USERID;
    const emailService = process.env.REACT_APP_EMAILJS_SERVICE;
    const emailTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE;
    
    emailjs.send(emailService, emailTemplate, emailParams, emailUserId)
      .then((response) => {
        console.log('Email envoyé avec succès :', response);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
         alert('Votre demande n\'a pas pu etre envoyée')
      });
      setIsSubmitted(true);};
  

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepComponents = [
    <Step1
      key="step1"
      questions={questions}
      answers={answers}
      handleAnswerChange={handleAnswerChange}
    />,
    <Step2
      key="step2"

      answers={answers}
      handleAnswerChange={handleAnswerChange}
    />,
    <Step3
      key="step3"
      userData={userData}
      handleFieldChange={handleFieldChange}
    />,
  ];

  const currentStepComponent = stepComponents[currentStep - 1];

  return (
    <div className='devis__container-form'>
      {isSubmitted ? (
        <div className="confirmation-message">
          <h3>Merci !</h3>
          <p>Votre demande a bien été envoyée et sera traitée dans les meilleurs délais.</p>
        </div>
      ) : (
        <div>
          <h3 id='devis__form-title'>Devis en Ligne</h3>
          <form id='devis__form-anchor' className='form' onSubmit={handleSubmit}>
            {currentStepComponent}
            <div className="buttons">
              {currentStep > 1 && (
                <button className='form__button' type="button" onClick={handlePrevious}>
                  Précédent
                </button>
              )}
              {currentStep < 3 ? (
                <button className='form__button' type="button" onClick={handleNext}>
                  Suivant
                </button>
              ) : (
                <button className='form__button' type="submit">
                  Valider
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default DevisForm;
