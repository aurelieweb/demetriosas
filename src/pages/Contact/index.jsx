import React from 'react';
import Banner from '../../components/Banner';
import ContactForm from '../../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';



const buttons = [
  { text: 'Demande d\'intervention', link: '/devis-en-ligne' },
];


function Contact() {
  const pageTitle = "Nous contacter";

  return (
    <div className='main'>
      <Banner 
        pageTitle={pageTitle}
        buttons={buttons} 
      />
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
            <FontAwesomeIcon icon={faLocationPin} className='contact__icon'/>
            <p>17, chemin des Troncs <br /> 74200 Allinges</p>
          </div>
          <div className="contact__card">
            <h3 className='contact__card-title'>Téléphone</h3>
            <FontAwesomeIcon icon={faPhone} className='contact__icon'/>
            <a href="tel:+33457437544">04 57 43 75 44</a>
          </div>
          <div className="contact__card">
            <h3 className='contact__card-title'>E-mail</h3>
            <FontAwesomeIcon icon={faEnvelope} className='contact__icon'/>
            <a href="mailto:contact@demetrio.fr">contact@demetrio.fr</a>
          </div>
        </div>
      </section>
      <section id='form__section'>
        <ContactForm/>
      </section>
    </div>
  );
}

export default Contact;

