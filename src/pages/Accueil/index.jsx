import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import Slide from '../../components/Slide';
import Card from '../../components/Card';
import CtaSection from '../../components/CtaSection';
import ModalIntervention from '../../components/ModalIntervention';
import Testimonies from '../../components/Testimonies';

import Imgplomberie from '../../assets/imgPlomberie.jpg';
import Imgchauffage from '../../assets/imgChauffage.jpg';
import Imgpac from '../../assets/imgPac.jpg';
import LogoAtlantic from '../../assets/logo-atlantic.jpg';
import LogoThermor from '../../assets/logo-thermor.png';
import LogoCedeo from '../../assets/logo-cedeo.png';
import LogoGrohe from '../../assets/logo-grohe.svg';
import LogoHansgrohe from '../../assets/logo-hansgrohe.png';

function Accueil() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Affiche modal popup
  useEffect(() => {
    const alreadySeen = sessionStorage.getItem('modalShown');
    let timer;

    if (!alreadySeen) {
      timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem('modalShown', 'true');
      }, 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const pageTitle =
    "Expert plomberie, Chauffage et Pompe à chaleur à Thonon";

  const plomberie = "plomberie";
  const chauffage = "chauffage";
  const pac = "pac";

  const questions = [
    {
      id: '1',
      question: "De quel type de demande s'agit-il ?",
      options: ["Demande d'intervention", 'Demande de devis'],
    },
    {
      id: '2',
      question: "S'agit-il d'une demande de dépannage ?",
      options: ['Oui', 'Non'],
    },
    {
      id: '3',
      question: 'Quel domaine concerne votre demande ?',
      options: ['Plomberie', 'Chauffage', 'Pompe à chaleur'],
    },
  ];

  return (
    <div className="main">

      <Banner
        pageTitle={pageTitle}
        buttons={[
          {
            text: "Demande d'intervention",
            onClick: () => setIsModalOpen(true),
          }
        ]}
      />

      {/* NOTRE SAVOIR-FAIRE */}
      <section>

        <div className="section-heading">
          <span className="section-heading__label">
            Nos métiers
          </span>

          <h2>
            Plomberie, chauffage et pompe à chaleur :
            notre savoir-faire
          </h2>
        </div>

          <p className="section-text"> 
            Depuis 2011, <strong>DEMETRIO accompagne les particuliers à 
            Thonon-les-Bains, Allinges et dans le Chablais</strong> pour leurs 
            projets de plomberie, de chauffage, de pompe à chaleur et de climatisation. 
            De l’intervention ponctuelle à la rénovation d’une installation, 
            nous étudions chaque projet pour proposer une solution adaptée, 
            fiable et durable. Notre approche associe <strong>plus de 20 ans 
            d’expérience métier</strong>, conseil technique et qualité de réalisation. 
          </p>

        <div className="container__card">
          <Card
            serviceName="Plomberie"
            serviceSection={plomberie}
            imageUrl={Imgplomberie}
          />

          <Card
            serviceName="Chauffage"
            serviceSection={chauffage}
            imageUrl={Imgchauffage}
          />

          <Card
            serviceName="Pompe à chaleur"
            serviceSection={pac}
            imageUrl={Imgpac}
          />
        </div>

      </section>


      {/* À PROPOS */}
      <section>

        <div className="section-heading">
          <span className="section-heading__label">
            Qui sommes-nous ?
          </span>

          <h2>
            Notre histoire, nos valeurs
          </h2>
        </div>

          <p className="section-text">
            Entreprise familiale spécialisée en <strong>plomberie et chauffage
            à Allinges, près de Thonon-les-Bains</strong>, DEMETRIO s’est construite
            au fil des années autour d’un savoir-faire artisanal, d’une exigence
            de qualité et d’une relation de confiance avec ses clients.
            Découvrez notre histoire et les valeurs qui façonnent notre façon
            de travailler au quotidien dans le Chablais.
          </p>

        <Slide />

      </section>


      {/* MARQUES */}
      <section>

        <div className="section-heading">
          <span className="section-heading__label">
            Fiabilité & performance
          </span>

          <h2>
            Nos marques de référence
          </h2>
        </div>

        <p className="section-text">
          La fiabilité d’une installation passe aussi par le choix de
          <strong> matériels et d’équipements de qualité</strong>. Pour nos installations
          de <strong>plomberie, chauffage, pompe à chaleur et climatisation</strong>,
          nous travaillons avec des marques professionnelles reconnues, sélectionnées
          pour leurs performances, leur durabilité et la disponibilité de leurs pièces.
          DEMETRIO est notamment partenaire de{' '}
          <a
            href="https://mon-installateur.atlantic.fr/Societe/DEMETRIO"
            className="link-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atlantic
          </a>
          , fabricant français de solutions de chauffage et de confort thermique.
          Chaque équipement est choisi en fonction des caractéristiques du logement,
          des besoins de ses occupants et des contraintes techniques de l’installation.
        </p>

        <div className="container__label">

          <a
            href="https://www.atlantic.fr/"
            className="label"
          >
            <img
              src={LogoAtlantic}
              alt="Demetrio, installateur Atlantic"
            />
          </a>

          <a
            href="https://www.thermor.fr/"
            className="label"
          >
            <img
              src={LogoThermor}
              alt="Demetrio, installateur Thermor"
            />
          </a>

          <a
            href="https://www.cedeo.fr/"
            className="label"
          >
            <img
              src={LogoCedeo}
              alt="Demetrio, installateur Cedeo"
            />
          </a>

          <a
            href="https://www.grohe.fr/fr_fr/particuliers.html?target_group=end"
            className="label"
          >
            <img
              src={LogoGrohe}
              alt="Demetrio, installateur Grohe"
            />
          </a>

          <a
            href="https://www.hansgrohe.fr/"
            className="label"
          >
            <img
              src={LogoHansgrohe}
              alt="Demetrio, installateur Hansgrohe"
            />
          </a>

        </div>

      </section>


      <ModalIntervention
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        questions={questions}
      />

      <Testimonies />

      <CtaSection
        title="Besoin d’un dépannage ou d’une installation ?"
        text="Demandez une intervention rapide et professionnelle à Thonon, Allinges et dans tout le Chablais."
        buttonLabel="Demander une intervention"
        onClick={() => setIsModalOpen(true)}
        questions={questions}
      />

    </div>
  );
}

export default Accueil;