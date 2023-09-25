import React from 'react';
import Banner from '../../components/Banner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationPin, } from '@fortawesome/free-solid-svg-icons';

function Contact() {

    const pageTitle = "Nous contacter";

    return (
        <div className='main'>
            <Banner pageTitle={pageTitle}/>
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
                  <p>17, chemin des Troncs <br/> 74200 Allinges</p>
                </div>
                <div className="contact__card">
                  <h3 className='contact__card-title'>Téléphone</h3>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+33457437544</p>
                </div>
                <div className="contact__card">
                  <h3 className='contact__card-title'>E-mail</h3>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>contact@demetrio.fr</p>
                </div>
        </div>
            </section>
            <section id='form__section' >
            <div className="contact__form">
            <h2>Contactez-nous</h2>   
        <form>

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
          </div>
          <div className="form-group form-style">
            <label htmlFor="objet">Objet :</label>
            <input
              type="text"
              id="objet"
              className="form-control"
              required
            />
          </div>
          <div className="form-group form-style">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              rows="4"
              className="form-control"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Envoyer
          </button>
        </form>
      </div>
            </section>

            
            </div>
    );
}
export default Contact; 