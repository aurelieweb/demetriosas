import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
import Faq from '../../components/Faq';
import ServiceCard from '../../components/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWrench,
  faDroplet,
  faScrewdriverWrench,
  faBath,
  faLightbulb,
  faGear,
  faShieldHalved,
  faHouse,
  faLocationDot
} 
from '@fortawesome/free-solid-svg-icons';
import ImgPlomberie from '../../assets/imgPlomberie.jpg';
import ImgPortrait from'../../assets/imgPortrait.png';
import ImgRge from '../../assets/imgRGE.jpeg';
import ImgSalleDeBain from '../../assets/imgSdb.jpg';
import ImgZoneIntervention from '../../assets/imgZoneIntervention.png';
import ImgTravaux from '../../assets/imgSdb.jpg';
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Testimonies from '../../components/Testimonies';
import CtaSection from '../../components/CtaSection';
//import ModalIntervention from '../../components/ModalIntervention';
//import Maintenance from '../../components/MaintenancePage';


const buttons = [
  { text: 'Demande d’intervention', link: '/intervention-plomberie' },
];

const faqDataPlomberie = [
  {
    title: "Quels dépannages de plomberie réalisez-vous ?",
    content: [
      "Nous intervenons pour différents problèmes de plomberie : fuite d’eau, robinet ou chasse d’eau défectueux, WC bouché, problème de canalisation, panne ou remplacement de chauffe-eau. Lors de l’intervention, nous recherchons l’origine du problème afin de proposer une réparation adaptée et durable."
    ],
    icon: faCircleQuestion
  },

  {
    title: "Quel est le délai d’intervention d’un plombier à Thonon-les-Bains et dans le Chablais ?",
    content: [
      "Nos délais dépendent de la nature de la demande et de notre planning. Pour un dépannage de plomberie, nous évaluons la situation dès votre prise de contact afin de vous proposer un créneau adapté. DEMETRIO intervient à Thonon-les-Bains, Allinges et dans le Chablais."
    ],
    icon: faCircleQuestion
  },

  {
    title: "Que faire en cas de fuite d’eau avant l’arrivée du plombier ?",
    content: [
      "Si la fuite est importante, commencez par couper l’arrivée d’eau afin de limiter les dégâts. Si nécessaire, coupez également l’alimentation électrique à proximité de la zone concernée sans vous mettre en danger. Vous pouvez ensuite nous transmettre des photos et une description de la fuite afin de nous aider à évaluer la situation avant l’intervention."
    ],
    icon: faCircleQuestion
  },

  {
    title: "Réparez-vous ou remplacez-vous les chauffe-eau ?",
    content: [
      "Oui. Nous intervenons sur les chauffe-eau pour diagnostiquer une panne et déterminer si une réparation est pertinente ou si le remplacement de l’appareil est préférable. Nous réalisons également l’installation de chauffe-eau électriques et de chauffe-eau thermodynamiques selon les besoins du logement."
    ],
    icon: faCircleQuestion
  },

  {
    title: "Réalisez-vous la création et la rénovation complète de salles de bains ?",
    content: [
      "Oui. DEMETRIO intervient pour la création et la rénovation de salles de bains : modification ou création des réseaux de plomberie, arrivées d’eau et évacuations, installation de douche à l’italienne, baignoire, vasque, WC, robinetterie et équipements sanitaires. Nous intervenons aussi bien dans le neuf que dans le cadre d’une rénovation."
    ],
    icon: faCircleQuestion
  },

  {
    title: "Pouvez-vous refaire toute la plomberie d’une maison en rénovation ?",
    content: [
      "Oui. Nous pouvons reprendre tout ou partie d’une installation de plomberie lors de la rénovation d’une maison : réseaux d’alimentation en eau, évacuations, équipements sanitaires, cuisine, salle de bains et production d’eau chaude. Le projet est étudié en fonction de l’installation existante et des nouveaux aménagements prévus."
    ],
    icon: faCircleQuestion
  },

  {
    title: "Proposez-vous un devis avant des travaux de plomberie ?",
    content: [
      "Oui. Pour les travaux nécessitant une étude préalable, nous établissons un devis détaillé avant réalisation. Pour les petites interventions et dépannages, les modalités et le coût de l’intervention sont précisés avant le début des travaux afin que vous sachiez clairement ce qui est prévu."
    ],
    icon: faCircleQuestion
  },

  {
    title: "Dans quelles communes intervenez-vous pour vos travaux de plomberie ?",
    content: [
      "DEMETRIO est basé à Allinges et intervient notamment à Thonon-les-Bains, Anthy-sur-Léman, Margencel, Sciez, Perrignier, Bons-en-Chablais, Douvaine, Évian-les-Bains et plus largement dans le Chablais. La possibilité d’intervention dépend également de la nature et de l’importance des travaux."
    ],
    icon: faCircleQuestion
  }
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

  const pageTitle = "Plombier à Thonon-les-bains, Allinges et dans le Chablais";

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
      
<section className="plomberie-services">

  <div className="section-heading">
    <span className="section-heading__label">
      Nos services en plomberie
    </span>

    <h2>Nos principaux services</h2>
  </div>

  <div className="plomberie-services__grid">
    <ServiceCard
      serviceName="Dépannage plomberie"
      description="Fuite d’eau, robinet défectueux, WC, canalisation, problème de pression… Une intervention rapide et efficace."
      icon={<FontAwesomeIcon icon={faWrench} />}
    />

    <ServiceCard
      serviceName="Chauffe-eau"
      description="Installation et remplacement de chauffe-eau électrique ou thermodynamique, diagnostic de panne et conseil sur la solution adaptée."
      icon={<FontAwesomeIcon icon={faDroplet} />}
    />

    <ServiceCard
      serviceName="Installation & rénovation"
      description="Création et rénovation des réseaux d’eau, alimentation et évacuation, équipements sanitaires, plomberie pour construction neuve ou rénovation."
      icon={<FontAwesomeIcon icon={faScrewdriverWrench} />}
    />

    <ServiceCard
      serviceName="Salle de bains"
      description="Création ou rénovation de salle de bains : douche, baignoire, vasque, WC et équipements sanitaires, avec accompagnement dans le choix des solutions."
      icon={<FontAwesomeIcon icon={faBath} />}
    />
  </div>

</section>

      <section className="savoirFaire-section image-left">
        <img
          className="pac-img"
          src={ImgPortrait}
          alt="Plombier à Thonon-les-Bains intervenant sur une installation de plomberie"
        />

        <div className="savoirFaire-div">
          <div className="section-heading">
            <span className="section-heading__label">
              Notre expertise
            </span>

            <h2>Plus de 20 ans d’expérience en plomberie</h2>
          </div>

          <p className="pac__div-text">
            <strong>
              Stéphane Demetrio exerce le métier de plombier-chauffagiste
              depuis plus de 20 ans.
            </strong>{' '}
            Cette expérience lui permet d’identifier rapidement la meilleure
            solution pour votre installation, en tenant compte de vos besoins,
            des contraintes techniques et de votre budget.
          </p>

          <p className="pac__div-text">
            Notre priorité : un travail soigné, des conseils clairs et des
            installations durables.
          </p>

          <div className="expertise-features">
            <div className="expertise-feature">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="expertise-feature__icon"
              />
              <h3>Conseil</h3>
              <p>et étude personnalisée</p>
            </div>

            <div className="expertise-feature">
              <FontAwesomeIcon
                icon={faGear}
                className="expertise-feature__icon"
              />
              <h3>Solutions adaptées</h3>
              <p>à votre installation</p>
            </div>

            <div className="expertise-feature">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="expertise-feature__icon"
              />
              <h3>Travail soigné</h3>
              <p>et durable</p>
            </div>
          </div>
        </div>
      </section>

      <section className="savoirFaire-section image-right">
        <img
          className="pac-img"
          src={ImgTravaux}
          alt="Rénovation complète d'une salle de bains dans le Chablais"
        />

        <div className="savoirFaire-div">
          <div className="section-heading">
            <span className="section-heading__label">
              Une réalisation DEMETRIO
            </span>

            <h2>
              Rénovation complète d’une salle de bains
            </h2>
          </div>

          <p className="pac__div-text">
            Cette <strong>rénovation complète de salle de bains</strong> a nécessité
            la reprise des réseaux de plomberie, l’installation d’une douche à
            l’italienne ainsi que la pose de la robinetterie et des équipements
            sanitaires.
          </p>

          <p className="pac__div-text">
            Un projet réalisé dans le <strong>Chablais</strong>, pensé pour offrir
            un espace confortable, fonctionnel et durable.
          </p>

          <Link to="/realisations">
            <Button text="Découvrir nos réalisations" />
          </Link>
        </div>
      </section>

      <section className="savoirFaire-section image-left">
        <img
          className="pac-img"
          src={ImgPlomberie}
          alt="Artisan plombier DEMETRIO à Allinges dans le Chablais"
        />

        <div className="savoirFaire-div">
          <div className="section-heading">
            <span className="section-heading__label">
              Confiance & sérénité
            </span>

            <h2>Un artisan de confiance pour vos travaux</h2>
          </div>

          <p className="pac__div-text">
            DEMETRIO réalise vos travaux avec des équipements de qualité
            et des fournisseurs reconnus. Nos installations sont couvertes
            par une <strong>garantie décennale</strong>, pour vous apporter
            sérénité et sécurité dans la réalisation de votre projet.
          </p>

          <p className="pac__div-text">
            Basée à <strong>Allinges</strong>, notre entreprise privilégie une
            relation directe et transparente avec ses clients : devis détaillé,
            conseils adaptés et un interlocuteur qui suit votre projet de A à Z.
          </p>

          <div className="expertise-features">
            <div className="expertise-feature">
              <FontAwesomeIcon
                icon={faHouse}
                className="expertise-feature__icon"
              />
              <h3>Entreprise familiale</h3>
              <p>depuis 2011</p>
            </div>

            <div className="expertise-feature">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="expertise-feature__icon"
              />
              <h3>Garantie décennale</h3>
              <p>pour vos travaux</p>
            </div>

            <div className="expertise-feature">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="expertise-feature__icon"
              />
              <h3>Intervention locale</h3>
              <p>à Allinges et dans le Chablais</p>
            </div>
          </div>
        </div>
      </section>

      <section className="savoirFaire-section image-right">
                <img
          className="pac-img"
          src={ImgZoneIntervention}
          alt="Zone d’intervention plomberie DEMETRIO à Thonon-les-Bains et dans le Chablais"
        />
        <div className="savoirFaire-div">

          <div className="section-heading">
            <span className="section-heading__label">
              Notre zone d’intervention
            </span>

            <h2>Votre plombier dans le Chablais</h2>
          </div>

          <p className="pac__div-text">
            Basés à <strong>Allinges</strong>, nous intervenons à
            <strong> Thonon-les-Bains, Évian-les-Bains</strong> et dans tout
            le <strong>Chablais</strong> pour vos travaux de plomberie :
            installation, rénovation et dépannage.
          </p>

          <p className="pac__div-text">
            Selon la nature de votre projet, nous nous déplaçons également
            dans les communes voisines pour étudier votre installation et
            vous proposer une solution adaptée.
          </p>

          <div className="intervention-cities">
            <h3>Nos principales communes d’intervention</h3>
            <p>
              Thonon-les-Bains <span>|</span>
              Allinges <span>|</span>
              Anthy-sur-Léman <span>|</span>
              Margencel <span>|</span>
              Sciez <span>|</span>
              Perrignier <span>|</span>
              Bons-en-Chablais <span>|</span>
              Douvaine <span>|</span>
              Évian-les-Bains
            </p>
          </div>

        </div>

      </section>

      <CtaSection
        title="Besoin d’un plombier à Thonon-les-Bains ou dans le Chablais ?"
        text="Une fuite, un chauffe-eau à remplacer, une installation à créer ou un projet de rénovation ? Décrivez-nous votre besoin en quelques minutes, nous revenons rapidement vers vous."
        buttonLabel="Demander une intervention"
        onClick={() => setModalOpen(true)}
        questions={questionsPlomberie}
      />


      <Testimonies/>

<Faq
  faqData={faqDataPlomberie}
  faqLabel="F.A.Q."
  faqTitle="Questions fréquentes sur nos services de plomberie"
/>

    </div>
  );
}

export default Plomberie;