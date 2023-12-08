import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Expressions régulières pour la validation des champs
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
const phoneRegex = /^0[1-9]([-. ]?[0-9]{2}){4}/;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFieldChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const validateInput = () => {
    const newErrors = {};

    // ... (votre logique de validation)
    if (!nameRegex.test(formData.nom)) {
        newErrors.nom = 'Le nom est invalide';
      }
  
      if (!nameRegex.test(formData.prenom)) {
        newErrors.prenom = 'Le prénom est invalide';
      }
  
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'L\'email est invalide';
      }
  
      if (!phoneRegex.test(formData.telephone)) {
        newErrors.telephone = 'Le numéro de téléphone est invalide';
      }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInput()) {
        console.log('Formulaire soumis avec succès', formData);
        // Ajoutez ici votre logique pour envoyer les données, par exemple avec emailjs
        sendEmail();
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
      ...formData,
      objet: formData.objet || 'N/A',
      message: formData.message || 'N/A',
    };

    // Envoi de la demande par mail
    // ...
const emailUserId = process.env.REACT_APP_EMAILJS_USERID;
const emailService = process.env.REACT_APP_EMAILJS_SERVICE;
const emailTemplateContact = process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT;
// ...

  //A modifier dans .env;
    
    emailjs.send(emailService, emailTemplateContact, emailParams, emailUserId)
      .then((response) => {
        console.log('Email envoyé avec succès :', response);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        alert('Votre demande n\'a pas pu être envoyée');
      });
    setIsSubmitted(true);
  };

  return (
    <div className="contact__form">
        {isSubmitted ? (
        <div className="confirmation-message">
          <h3>Merci !</h3>
          <p>Votre demande a bien été envoyée et sera traitée dans les meilleurs délais.</p>
        </div>
      ) : (
        <div>
            <h2>Contactez-nous</h2>
            <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="nom">Nom :</label>
                    <input
                        type="text"
                        id="nom"
                        className="form-control"
                        value={formData.nom || ''}
                        onChange={(e) => handleFieldChange('nom', e.target.value)}
                        required
                    />
                    {errors.nom && <div className="error-message">{errors.nom}</div>}
                    </div>
                    <div className="form-group">
                    <label htmlFor="prenom">Prénom :</label>
                    <input
                        type="text"
                        id="prenom"
                        className="form-control"
                        value={formData.prenom || ''}
                        onChange={(e) => handleFieldChange('prenom', e.target.value)}
                        required
                    />
                    {errors.prenom && <div className="error-message">{errors.prenom}</div>}
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">E-mail :</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={formData.email || ''}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        required
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                    <label htmlFor="telephone">Numéro de téléphone :</label>
                    <input
                        type="tel"
                        id="telephone"
                        className="form-control"
                        value={formData.telephone || ''}
                        onChange={(e) => handleFieldChange('telephone', e.target.value)}
                        required
                    />
                    {errors.telephone && <div className="error-message">{errors.telephone}</div>}
                    </div>
                    <div className="form-group form-style">
                    <label htmlFor="objet">Objet :</label>
                    <input
                        type="text"
                        id="objet"
                        className="form-control"
                        value={formData.objet || ''}
                        onChange={(e) => handleFieldChange('objet', e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group form-style">
                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="form-control"
                        value={formData.message || ''}
                        onChange={(e) => handleFieldChange('message', e.target.value)}
                        required
                    ></textarea>
                    </div>
                    <button className="form__button" type="submit">
                    Envoyer
                    </button>
                </form>
            </div>
        )}
    </div>
  );
};

export default ContactForm;
