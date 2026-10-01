import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Banner from '../../components/Banner';
import Faq from '../../components/Faq';
import ServiceCard from '../../components/ServiceCard';
import Testimonies from '../../components/Testimonies';
import CtaSection from '../../components/CtaSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSnowflake,
  faTemperatureHalf,
  faHouse,
  faScrewdriverWrench,
  faLightbulb,
  faGear,
  faShieldHalved,
  faLocationDot,
  faCircleQuestion
} from '@fortawesome/free-solid-svg-icons';

/*
 * PHOTOS TEMPORAIRES
 * À remplacer ensuite par les photos climatisation.
 */
import ImgClimatisation from '../../assets/imgClimatisationThonon.png';
import ImgPortrait from '../../assets/imgPortrait.png';
import ImgTravaux from '../../assets/imgClimatisationYvoire.png';
import ImgZoneIntervention from '../../assets/imgZoneIntervention.png';


/* ========================================
   BANNER
======================================== */

const buttons = [
  {
    text: 'Demander un devis',
    link: '/devis-en-ligne'
  },
];


/* ========================================
   FAQ CLIMATISATION
======================================== */

const faqDataClimatisation = [
  {
    title: "Quelle climatisation choisir pour une maison ?",
    content: [
      "Le choix d’une climatisation dépend de plusieurs éléments : la surface et le volume à climatiser, le nombre de pièces, l’isolation, l’exposition du logement et vos habitudes. Une étude préalable permet de déterminer la puissance nécessaire et de choisir une installation adaptée à votre habitation."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Quelle est la différence entre une climatisation monosplit et multisplit ?",
    content: [
      "Une climatisation monosplit associe une unité extérieure à une unité intérieure et convient pour climatiser une pièce ou une zone précise. Une installation multisplit permet de raccorder plusieurs unités intérieures à un même groupe extérieur afin de climatiser plusieurs pièces du logement."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Une climatisation réversible peut-elle aussi chauffer la maison ?",
    content: [
      "Oui. Une climatisation réversible fonctionne comme une pompe à chaleur air-air : elle rafraîchit votre logement lorsqu’il fait chaud et peut également produire de la chaleur en hiver. Le dimensionnement de l’installation est essentiel pour obtenir de bonnes performances et un confort adapté au logement."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Quelle puissance de climatisation faut-il pour une maison ?",
    content: [
      "La puissance d’une climatisation ne doit pas être déterminée uniquement en fonction de la surface. Le volume des pièces, l’isolation, l’exposition, les surfaces vitrées et la configuration du logement doivent également être pris en compte. Nous étudions ces différents éléments avant de vous proposer une installation."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Où installer les unités intérieures et extérieures d’une climatisation ?",
    content: [
      "L’emplacement des unités est étudié pour favoriser une bonne diffusion de l’air, préserver le confort des occupants, limiter les nuisances sonores et respecter les contraintes techniques du logement. Nous recherchons également une implantation aussi discrète que possible."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Peut-on installer une climatisation dans une maison existante ?",
    content: [
      "Oui. Une climatisation peut être installée dans de nombreux logements existants. Avant les travaux, nous étudions la configuration des pièces, l’emplacement du groupe extérieur et le passage des différentes liaisons afin de déterminer la solution la plus adaptée."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Combien coûte l’installation d’une climatisation réversible ?",
    content: [
      "Le prix d’une installation de climatisation dépend notamment du nombre de pièces à équiper, de la puissance nécessaire, du type d’installation, du matériel choisi et des contraintes de pose. Après étude de votre logement et de vos besoins, DEMETRIO vous remet un devis détaillé."
    ],
    icon: faCircleQuestion
  },
  {
    title: "Où intervenez-vous pour installer une climatisation dans le Chablais ?",
    content: [
      "DEMETRIO est basé à Allinges, près de Thonon-les-Bains, et intervient notamment à Thonon-les-Bains, Évian-les-Bains, Sciez, Anthy-sur-Léman, Margencel, Perrignier, Bons-en-Chablais, Douvaine, Veigy-Foncenex et plus largement dans le Chablais. La possibilité d’intervention dépend de la nature et de la localisation du projet."
    ],
    icon: faCircleQuestion
  }
];


/* ========================================
   QUESTIONS FORMULAIRE CLIMATISATION
======================================== */

const questionsClimatisation = [
  {
    id: '1',
    question: "Quel est votre projet de climatisation ?",
    options: [
      'Climatiser une pièce',
      'Climatiser plusieurs pièces',
      'Climatiser l’ensemble du logement',
      'Je souhaite être conseillé(e)'
    ],
  },
  {
    id: '2',
    question: "Votre logement est-il déjà équipé d’une climatisation ?",
    options: ['Oui', 'Non'],
  },
  {
    id: '3',
    question: "Dans quelle commune êtes-vous situé(e) ?",
    options: [
      'Thonon-les-Bains',
      'Allinges',
      'Évian-les-Bains',
      'Autre'
    ],
  },
];


/* ========================================
   PAGE CLIMATISATION
======================================== */

function Climatisation() {

  const pageTitle =
    "Installation de climatisation à Thonon-les-Bains et dans le Chablais";

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="main">

      {/* ========================================
          BANNER
      ======================================== */}

      <Banner
        pageTitle={pageTitle}
        buttons={buttons}
      />


      {/* ========================================
          SERVICES CLIMATISATION
      ======================================== */}

      <section className="plomberie-services">

        <div className="section-heading">
          <span className="section-heading__label">
            Nos solutions de climatisation
          </span>

          <h2>
            Une climatisation adaptée à votre logement
          </h2>
        </div>

        <div className="plomberie-services__grid">

          <ServiceCard
            serviceName="Climatisation réversible"
            description="Une solution pour rafraîchir votre logement en été et apporter du chauffage en hiver, avec une installation adaptée à vos besoins."
            icon={<FontAwesomeIcon icon={faTemperatureHalf} />}
          />

          <ServiceCard
            serviceName="Climatisation monosplit"
            description="Une unité intérieure associée à un groupe extérieur pour climatiser efficacement une pièce, une chambre, un bureau ou un espace de vie."
            icon={<FontAwesomeIcon icon={faSnowflake} />}
          />

          <ServiceCard
            serviceName="Climatisation multisplit"
            description="Plusieurs unités intérieures reliées à un même groupe extérieur pour apporter un confort adapté dans plusieurs pièces du logement."
            icon={<FontAwesomeIcon icon={faHouse} />}
          />

          <ServiceCard
            serviceName="Installation sur mesure"
            description="Étude du logement, dimensionnement et implantation des équipements pour une installation performante, confortable et discrète."
            icon={<FontAwesomeIcon icon={faScrewdriverWrench} />}
          />

        </div>

      </section>


      {/* ========================================
          EXPERTISE
      ======================================== */}

      <section className="savoirFaire-section image-left">

        <img
          className="pac-img"
          src={ImgPortrait}
          alt="Installateur de climatisation à Allinges près de Thonon-les-Bains"
        />

        <div className="savoirFaire-div">

          <div className="section-heading">
            <span className="section-heading__label">
              Notre expertise
            </span>

            <h2>
              Une installation pensée pour votre logement
            </h2>
          </div>

          <p className="pac__div-text">
            <strong>
              Stéphane Demetrio exerce le métier de plombier-chauffagiste
              depuis plus de 20 ans.
            </strong>{' '}
            Basés à <strong>Allinges, près de Thonon-les-Bains</strong>,
            nous étudions chaque projet de climatisation en tenant compte
            de votre logement, de vos besoins et des contraintes techniques
            de l’installation.
          </p>

          <p className="pac__div-text">
            Puissance, nombre d’unités, emplacement et configuration
            de l’installation sont étudiés avant les travaux afin de
            rechercher le meilleur équilibre entre{' '}
            <strong>
              confort, performance et intégration dans votre logement.
            </strong>
          </p>

          <div className="expertise-features">

            <div className="expertise-feature">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="expertise-feature__icon"
              />
              <h3>Étude personnalisée</h3>
              <p>de votre logement</p>
            </div>

            <div className="expertise-feature">
              <FontAwesomeIcon
                icon={faGear}
                className="expertise-feature__icon"
              />
              <h3>Solution adaptée</h3>
              <p>à vos besoins</p>
            </div>

            <div className="expertise-feature">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="expertise-feature__icon"
              />
              <h3>Installation soignée</h3>
              <p>et durable</p>
            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          RÉALISATION
          Photo temporaire à remplacer
      ======================================== */}

      <section className="savoirFaire-section image-right">

        <img
          className="pac-img"
          src={ImgTravaux}
          alt="Installation de climatisation réversible à Yvoire"
        />

        <div className="savoirFaire-div">

          <div className="section-heading">
            <span className="section-heading__label">
              Une réalisation DEMETRIO
            </span>

            <h2>
              Installation d’une climatisation réversible à Yvoire
            </h2>
          </div>

          <p className="pac__div-text">
            Pour cette maison située à <strong>Yvoire</strong>,
            nous avons étudié la configuration du logement afin de
            déterminer la puissance nécessaire et l’emplacement des
            différentes unités de climatisation.
          </p>

          <p className="pac__div-text">
            L’installation a été pensée pour apporter un{' '}
            <strong>confort agréable été comme hiver</strong>,
            tout en intégrant les équipements de manière aussi discrète
            que possible dans l’habitation.
          </p>

          <Link to="/realisations">
            <Button text="Découvrir nos réalisations" />
          </Link>

        </div>

      </section>


      {/* ========================================
          CONFIANCE
      ======================================== */}

      <section className="savoirFaire-section image-left">

        <img
          className="pac-img"
          src={ImgClimatisation}
          alt="Climatisation réversible Daikin installée dans une maison à Thonon-les-bains"
        />

        <div className="savoirFaire-div">

          <div className="section-heading">
            <span className="section-heading__label">
              Confiance & sérénité
            </span>

            <h2>
              Un artisan local pour votre installation de climatisation
            </h2>
          </div>

          <p className="pac__div-text">
            <strong>
              Entreprise familiale basée à Allinges depuis 2011
            </strong>,
            DEMETRIO accompagne les particuliers de Thonon-les-Bains
            et du Chablais dans leurs projets de chauffage,
            pompe à chaleur et climatisation.
          </p>

          <p className="pac__div-text">
            Nous privilégions une relation directe et transparente :
            devis détaillé, conseils adaptés et un interlocuteur qui
            suit votre projet de l’étude jusqu’à l’installation.
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
              <h3>Entreprise locale</h3>
              <p>basée à Allinges</p>
            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          ZONE D'INTERVENTION
      ======================================== */}

      <section className="savoirFaire-section image-right">

        <img
          className="pac-img"
          src={ImgZoneIntervention}
          alt="Zone d'installation de climatisation à Thonon-les-Bains et dans le Chablais"
        />

        <div className="savoirFaire-div">

          <div className="section-heading">
            <span className="section-heading__label">
              Notre zone d’intervention
            </span>

            <h2>
              Votre installateur de climatisation dans le Chablais
            </h2>
          </div>

          <p className="pac__div-text">
            Basés à <strong>Allinges</strong>, nous intervenons pour
            l’installation de climatisations réversibles à{' '}
            <strong>
              Thonon-les-Bains, Évian-les-Bains, Sciez,
              Anthy-sur-Léman
            </strong>{' '}
            et plus largement dans le <strong>Chablais</strong>.
          </p>

          <p className="pac__div-text">
            Nous intervenons également dans le secteur de
            <strong> Douvaine et Veigy-Foncenex</strong>.
            Selon la nature et la localisation de votre projet,
            nous pouvons nous déplacer dans les communes voisines
            afin d’étudier votre installation.
          </p>

          <div className="intervention-cities">

            <h3>
              Nos principales communes d’intervention
            </h3>

            <p>
              Thonon-les-Bains <span>|</span>
              Allinges <span>|</span>
              Anthy-sur-Léman <span>|</span>
              Margencel <span>|</span>
              Sciez <span>|</span>
              Perrignier <span>|</span>
              Bons-en-Chablais <span>|</span>
              Douvaine <span>|</span>
              Veigy-Foncenex <span>|</span>
              Évian-les-Bains
            </p>

          </div>

        </div>

      </section>


      {/* ========================================
          CTA
      ======================================== */}

      <CtaSection
        title="Un projet de climatisation à Thonon-les-Bains ou dans le Chablais ?"
        text="Vous souhaitez climatiser une pièce, plusieurs chambres ou l’ensemble de votre logement ? Présentez-nous votre projet afin que nous puissions étudier la solution la plus adaptée à votre habitation."
        buttonLabel="Demander un devis"
        onClick={() => setModalOpen(true)}
        questions={questionsClimatisation}
      />


      {/* ========================================
          AVIS CLIENTS
      ======================================== */}

      <Testimonies />


      {/* ========================================
          FAQ
      ======================================== */}

      <Faq
        faqData={faqDataClimatisation}
        faqLabel="F.A.Q."
        faqTitle="Questions fréquentes sur la climatisation"
      />

    </div>
  );
}

export default Climatisation;