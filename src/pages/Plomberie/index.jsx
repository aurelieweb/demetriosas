import React, { useState } from 'react';
import Banner from '../../components/Banner';
import Faq from '../../components/Faq';
import ImgPlomberie from '../../assets/imgPlomberie.jpg';
import ImgRge from '../../assets/imgRGE.jpeg';
import ImgSalleDeBain from '../../assets/imgSdb.jpg';
import ImgTravaux from '../../assets/imgSdb.jpg';
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Testimonies from '../../components/Testimonies';
import CtaSection from '../../components/CtaSection';
//import ModalIntervention from '../../components/ModalIntervention';


const buttons = [
  { text: 'Demande d’intervention', link: '/intervention-plomberie' },
];

const faqTitlePac = 'F.A.Q.';

  const faqDataPac = [
{
    title: "Comment éviter les arnaques en plomberie ?",
    content: [
      "Demetrio est une entreprise artisanale de confiance avec plus de 20 ans d’expérience. Nous sommes assurés en décennale, nos devis sont détaillés et transparents, et nous ne facturons que ce qui est réellement nécessaire. La rigueur et l’honnêteté sont au cœur de nos interventions."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Intervenez-vous en urgence pour les dépannages ?",
    content: [
      "Oui, nous intervenons rapidement selon nos disponibilités. Chaque situation est évaluée pour garantir une réponse adaptée. Nous privilégions la fiabilité à la précipitation, pour une intervention durable et sans mauvaise surprise."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Quels sont vos délais d'intervention en plomberie ?",
    content: [
      "Nous vous proposons un créneau sous 24 à 72h en fonction de l'urgence et de notre planning. Nos délais sont annoncés dès le premier contact, et respectés. La ponctualité et la communication sont des engagements chez Demetrio."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Réalisez-vous des installations complètes de plomberie ?",
    content: [
      "Oui, nous réalisons l’installation complète de réseaux de plomberie dans le neuf ou en rénovation. Que ce soit pour une maison, une salle de bain ou une cuisine, nous assurons un travail soigné et conforme aux normes en vigueur."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Faites-vous la rénovation de salles de bain ?",
    content: [
      "Oui, nous rénovons des salles de bain de A à Z : tuyauterie, robinetterie, sanitaires, chauffe-eau, et finitions. Notre objectif est de vous proposer un espace à la fois fonctionnel, esthétique et durable."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Quels types de dépannages proposez-vous ?",
    content: [
      "Nous intervenons sur les fuites d’eau, WC bouchés, chauffe-eau en panne, robinet défectueux, ou encore les canalisations gelées ou bouchées et bien plus encore. Chaque dépannage est effectué avec diagnostic, réparation durable, et transparence."
    ],
    icon: faCircleQuestion
  },
  {
  title: "Proposez-vous un devis avant l’intervention ?",
  content: [
    "Pour les interventions de plomberie supérieures à 150 €, un devis est systématiquement établi avant tout engagement. Pour les dépannages inférieurs à ce montant, nous communiquons toujours une fourchette de prix claire avant de commencer l'intervention. Notre priorité est la transparence et la confiance, sans mauvaise surprise."
  ],
    icon: faCircleQuestion
  },
  {
    title: "Êtes-vous assurés en cas de problème ?",
    content: [
      "Oui, nous disposons d’une assurance décennale et responsabilité civile professionnelle. Vous êtes couvert en cas de sinistre ou de malfaçon, même plusieurs années après l’intervention."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Travaillez-vous avec des matériaux de qualité ?",
    content: [
      "Oui, nous sélectionnons des fournisseurs fiables et du matériel de qualité professionnelle pour garantir la durabilité de vos installations. Nous ne faisons aucun compromis sur la sécurité ou la performance."
    ],
    icon: faCircleQuestion
  },
  ];

// ✅ Questions spécifiques à la plomberie
const questionsPlomberie = [
  {
    id: '1',
    question: "Quel type d’intervention plomberie souhaitez-vous ?",
    options: ['Installation', 'Dépannage', 'Recherche de fuite', 'Autre'],
  },
  {
    id: '2',
    question: "Quel est le niveau d’urgence ?",
    options: ['Intervention rapide', 'Sous 48h', 'Non urgent'],
  },
  {
    id: '3',
    question: "Dans quelle commune êtes-vous situé(e) ?",
    options: ['Thonon', 'Allinges', 'Publier', 'Autre'],
  },
];

function Plomberie() {

  const pageTitle = "Plombier Thonon & Chablais - Dépannage, Installation, Rénovation";

  const openTallyForm = () => {
    if (window.Tally) {
      window.Tally.openPopup('mVMp4J', {
        layout: 'modal',
        width: 700,
      });
    } else {
      console.error('Tally is not loaded yet');
    }
  };

//Modal
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div className='main'>
      <Banner 
        pageTitle={pageTitle}
        buttons={buttons} 
      />

      <section className='savoirFaire-section image-left'>
        <img className='pac-img' src={ImgPlomberie} alt='Dépannage plomberie Thonon et Chablais' />
        <div className='savoirFaire-div'>
          <h2 className='section-text'>Artisan plombier à Thonon, Allinges et dans le Chablais</h2>
          <p className='pac__div-text'>Chez <strong>Demetrio</strong>, nous mettons notre savoir-faire de plus de 20 ans au service de vos installations, rénovations et dépannages en plomberie. Nos valeurs ? <strong>Rigueur, honnêteté et qualité</strong>.</p>
          <p className='pac__div-text'>Dans un secteur où les <strong>arnaques sont fréquentes</strong>, nous vous garantissons un service fiable, des devis clairs, et un accompagnement professionnel à chaque étape de votre projet.</p>
          <p className='pac__div-text'>Nous intervenons dans les meilleurs délais pour toute demande à <strong>Thonon, Allinges, Annemasse</strong> et dans tout le <strong>Chablais</strong>, sur rendez-vous.</p>
        </div>
      </section>

      <section className='savoirFaire-section image-right'>
        <img className='pac-img' src={ImgTravaux} alt='Travaux de plomberie en rénovation à Thonon' />
        <div className='savoirFaire-div'>
          <h2 className='section-text'>Nos services en plomberie</h2>
          <ul className='pac__div-text'>
            <li><strong>Dépannage plomberie</strong> : fuites, WC bouché, ballon d’eau chaude, urgences sanitaires</li>
            <li><strong>Installation neuve</strong> : cuisine, salle de bain, chauffe-eau, chauffe-eau thermodynamique</li>
            <li><strong>Rénovation</strong> : réfection complète ou partielle, optimisation des réseaux</li>
            <li><strong>Désembouage et entretien</strong> de votre circuit de chauffage</li>
            <li><strong>Détection de fuites non apparentes</strong></li>
            <li><strong>Création de salle de bain clé en main</strong> dans le neuf ou en rénovation</li>
          </ul>
          <button className='download-guide-button' onClick={openTallyForm}>
            Télécharger notre guide plomberie
          </button>
        </div>
      </section>

      <section className='savoirFaire-section image-left'>
        <a href='https://www.qualit-enr.org/entreprises/demetrio/' className='pac-lien'><img className='pac-img-test' src={ImgRge} alt='Plombier certifié RGE à Thonon - Demetrio' /></a>
        <div className='savoirFaire-div'>
          <h2 className='section-text'>Garantie, certifications et assurance</h2>
          <p className='pac__div-text'>Notre entreprise est <strong>certifiée RGE</strong> pour certaines installations (notamment PAC) et bénéficie de la <strong>garantie décennale</strong> ainsi que d’une <strong>assurance responsabilité professionnelle</strong> à jour.</p>
          <p className='pac__div-text'>Vous êtes ainsi protégé en cas de litige ou défaut de réalisation. Avec <strong>Demetrio</strong>, vous travaillez avec un artisan transparent, assuré, expérimenté, et reconnu dans le Chablais.</p>
        </div>
      </section>

      <section className='savoirFaire-section image-right'>
        <div className='savoirFaire-div'>
          <h2 className='section-text'>Pourquoi faire appel à Demetrio ?</h2>
          <p className='pac__div-text'>
            ✔️ Plus de 20 ans d’expérience en plomberie<br />
            ✔️ Travail soigné et finitions irréprochables<br />
            ✔️ Artisan de confiance, engagé sur la qualité<br />
            ✔️ Interventions à Thonon, Allinges, Annemasse et Chablais<br />
            ✔️ Devis clairs et détaillés, sans surprise<br />
            ✔️ Accompagnement humain et professionnel
          </p>
        </div>
        <img className='pac-img' src={ImgSalleDeBain} alt='Rénovation de salle de bain à Allinges et Thonon' />
      </section>

      <CtaSection
        title="Besoin d’un dépannage ou d’une installation ?"
        text="Demandez une intervention rapide et professionnelle à Thonon, Allinges et dans tout le Chablais."
        buttonLabel="Demander une intervention"
        onClick={() => setModalOpen(true)}
        questions={questionsPlomberie}
      />


      <Testimonies/>

      < Faq
       faqData={faqDataPac}
       faqTitle={faqTitlePac}
      />

    </div>
  );
}

export default Plomberie;