import React, { useState } from 'react';
import Banner from '../../components/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';

// Expressions régulières pour la validation des champs
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
const phoneRegex = /^0[1-9]([-. ]?[0-9]{2}){4}/;

function Contact() {
  const pageTitle = "Nous contacter";

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleFieldChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const validateInput = () => {
    const newErrors = {};

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
      // Envoyer le formulaire
      console.log('Formulaire soumis avec succès', formData);
      // Ajoutez ici votre logique pour envoyer les données, par exemple avec emailjs

    } else {
      console.log('Validation a échoué. Le formulaire n\'a pas été soumis.');
    }
  };

  return (
    <div className='main'>
      <Banner pageTitle={pageTitle} />
      <div className="google-map-container">
        <iframe
          title="Adresse sur Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.592478137286!2d6.392298315711647!3d46.36707807911695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c524f5f93f979%3A0x11bbd10aa2b41a5e!2s17%20Chemin%20des%20Troncs%2C%2074200%20Allinges!5e0!3m2!1sen!2sfr!4v1653135036472!5m2!1sen!2sfr"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <section id='contact__section'>
        <div className="contact__container">
          <div className="contact__card">
            <h3 className='contact__card-title'>Adresse</h3>
            <FontAwesomeIcon icon={faLocationPin} />
            <p>17, chemin des Troncs <br /> 74200 Allinges</p>
          </div>
          <div className="contact__card">
            <h3 className='contact__card-title'>Téléphone</h3>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+33457437544">04 57 43 75 44</a>
          </div>
          <div className="contact__card">
            <h3 className='contact__card-title'>E-mail</h3>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:contact@demetrio.fr">contact@demetrio.fr</a>
          </div>
        </div>
      </section>
      <section id='form__section'>
        <div className="contact__form">
          <h2>Contactez-nous</h2>
          <form className='form' onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom">Nom :</label>
              <input
                type="text"
                id="nom"
                className="form-control"
                value={formData.nom}
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
                value={formData.prenom}
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
                value={formData.email}
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
                value={formData.telephone}
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
                value={formData.objet}
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
                value={formData.message}
                onChange={(e) => handleFieldChange('message', e.target.value)}
                required
              ></textarea>
            </div>
            <button className="form__button" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

