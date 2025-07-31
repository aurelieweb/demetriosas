import React, { useState } from 'react';
import emailjs from 'emailjs-com';

//Composant devisForm - Etape 1 
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

//Composant devisForm - Etape 2
function Step2({ answers, handleAnswerChange }) {
  return (
    <div className='devis__form-msg'>
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

//Composant devisForm - Etape 3
function Step3({ userData, handleFieldChange,errors }) {
  return (
    <div className='form'>
      <div className="form-group" id="devis__form-group">
        <label htmlFor="nom">Nom :</label>
        <input
        type="text"
        id="nom"
        className="form-control"
        value={userData.nom || ''}
        onChange={(e) => handleFieldChange('nom', e.target.value)}
        required
        />
        {errors.nom && (
          <div className="error-message">{errors.nom}</div>
        )}
      </div>

      <div className="form-group" id="devis__form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
        type="text"
        id="prenom"
        className="form-control"
        value={userData.prenom || ''}
        onChange={(e) => handleFieldChange('prenom', e.target.value)}
        required
        />
        {errors.prenom && (
          <div className="error-message">{errors.prenom}</div>
        )}
      </div>

      <div className="form-group" id="devis__form-group">
        <label htmlFor="email">E-mail :</label>
        <input
        type="email"
        id="email"
        className="form-control"
        value={userData.email || ''}
        onChange={(e) => handleFieldChange('email', e.target.value)}
        required
        />
        {errors.email && (
          <div className="error-message">{errors.email}</div>
        )}
      </div>

      <div className="form-group" id="devis__form-group">
        <label htmlFor="telephone">Numéro de téléphone :</label>
        <input
        type="tel"
        id="telephone"
        className="form-control"
        value={userData.telephone || ''}
        onChange={(e) => handleFieldChange('telephone', e.target.value)}
        required
        />
        {errors.telephone && (
          <div className="error-message">{errors.telephone}</div>
        )}
      </div>

      <div className="form-group" id="devis__form-group">
        <label htmlFor="adresse">Adresse de l'intervention :</label>
        <input
        type="text"
        id="adresse"
        className="form-control"
        value={userData.adresse || ''}
        onChange={(e) => handleFieldChange('adresse', e.target.value)}
        required
        />
        {errors.adresse && (
          <div className="error-message">{errors.adresse}</div>
        )}
      </div>

      <div className="form-group" id="devis__form-group">
        <label htmlFor="ville">Ville :</label>
        <input
        type="text"
        id="ville"
        className="form-control"
        value={userData.ville || ''}
        onChange={(e) => handleFieldChange('ville', e.target.value)}
        required
        />
        {errors.ville && (
          <div className="error-message">{errors.ville}</div>
        )}
      </div>
    </div>
  );
}

//Expression régulière pour validation formualaire
let nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
let addressRegex = /^[0-9]+[\w\s\.\',-]*$/;
let cityRegex = /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\. ))?[a-zA-Z\u0080-\u024F]+)*(?:\/[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\. ))?[a-zA-Z\u0080-\u024F]+)*)?$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phoneRegex = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

//Function validation des données
function validateField(value, regex) {
  return regex.test(value);
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

  const [errors, setErrors] = useState({}); // État pour les erreurs
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleFieldChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  //Fonction validation des champs
  const validateInput = () => {
    const newErrors = {};

    if (!validateField(userData.nom, nameRegex)) {
      newErrors.nom = 'Le nom est invalide';
    }

    if (!validateField(userData.prenom, nameRegex)) {
      newErrors.prenom = 'Le prénom est invalide';
    }

    if (!validateField(userData.adresse, addressRegex)) {
      newErrors.adresse = 'L\'adresse est invalide';
    }

    if (!validateField(userData.ville, cityRegex)) {
      newErrors.ville = 'La ville est invalide';
    }

    if (!validateField(userData.email, emailRegex)) {
      newErrors.email = 'L\'email est invalide';
    }

    if (!validateField(userData.telephone, phoneRegex)) {
      newErrors.telephone = 'Le numéro de téléphone est invalide';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    
    if (validateInput()) {
      console.log('Formulaire soumis avec succès');
      
 //Génération date de la demande
      const currentDate = new Date().toISOString(); // Génère une date ISO standard
      const webhookUrl = 'https://hook.eu2.make.com/seflhki3jm64sx7tfqbfub4r86nbxn9t'; // URL du Webhook Make

      //Envoi email.js
      sendEmail();

// Envoyer les données au Webhook Make

      const formData = {
        nom: userData.nom,
        prenom: userData.prenom,
        email: userData.email,
        telephone: userData.telephone,
        adresse: userData.adresse,
        ville: userData.ville,
        message: answers.message || "N/A",
        dateSoumission: currentDate,
        statut: "NEW" // Ajoute la date de soumission
    };

// Ajouter les réponses aux questions dans formData en utilisant l'ID des questions
questions.forEach((question) => {
  const answer = answers[question.id] || 'N/A';
  formData[`question_${question.id}`] = answer;
});

    console.log("Données envoyées :", JSON.stringify(formData, null, 2));

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          console.log("Données envoyées au Webhook Make");
        } else {
          console.error("Erreur lors de l'envoi des données au Webhook", response.statusText);
        }
      })
      .catch(error => console.error("Erreur:", error));

      setIsSubmitted(true);
    } else {
      console.log('Validation a échoué. Le formulaire n\'a pas été soumis.');
    }
  };

//Fonction envoi email
  const sendEmail = () => {
    // Envoyer les réponses par email
    const emailParams = {
      to_email: 'contact@demetrio.fr',
      ...userData,
      message: answers.message || 'N/A',
    };

    questions.forEach((question) => {
      const answer = answers[question.id] || 'N/A';
      emailParams[`question_${question.id}`] = answer;
    });
    
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
        alert('Votre demande n\'a pas pu être envoyée');
      });
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      if (currentStep === 1) {
        // Vérifiez d'abord s'il y a des questions non répondues dans l'étape 1
        const unansweredQuestions = questions.filter((question) => !answers[question.id]);
  
        if (unansweredQuestions.length > 0) {
          alert("Veuillez répondre à toutes les questions avant de passer à l'étape suivante.");
          return; // Arrête le passage à l'étape suivante si des questions de l'étape 1 restent sans réponse
        }
      }
  
      if (currentStep === 2 && !answers.message) {
        alert("Veuillez décrire votre demande avant de passer à l'étape suivante.");
        return; // Arrête le passage à l'étape suivante si le champ de message est vide
      }
  
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
      errors={errors}
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
          <h3 className='devis__form-title'>Demande de Devis & Intervention en Ligne</h3>
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
