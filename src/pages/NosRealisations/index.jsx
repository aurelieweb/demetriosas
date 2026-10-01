import React from 'react';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import CtaSection from '../../components/CtaSection';

const buttons = [
  { text: "Demander un devis", link: "/devis-en-ligne" },
];

function NosRealisations() {

  const pageTitle =
    "Nos réalisations à Thonon-les-Bains et dans le Chablais";

  return (
    <div className="main">

      <Banner
        pageTitle={pageTitle}
        buttons={buttons}
      />

      <section className="gallery__section">

        <div className="section-heading">
          <span className="section-heading__label">
            Nos réalisations
          </span>

          <h2>
            Plomberie, chauffage, pompe à chaleur et climatisation
          </h2>
        </div>

        <p className="section-text">
          Découvrez quelques réalisations DEMETRIO en
          <strong> plomberie, chauffage, pompe à chaleur et climatisation</strong>
          {' '}à Thonon-les-Bains, Allinges et dans le Chablais.
          Installation d’équipements, rénovation de salle de bains,
          remplacement de système de chauffage ou pose d’une climatisation
          réversible : chaque projet est étudié en fonction du logement,
          des besoins de nos clients et des contraintes techniques.
        </p>

        <Gallery />

      </section>

      <CtaSection
        title="Vous avez un projet dans le Chablais ?"
        text="Plomberie, chauffage, pompe à chaleur ou climatisation : présentez-nous votre projet et échangeons sur la solution adaptée à votre logement."
        buttonLabel="Décrire mon projet"
      />

    </div>
  );
}

export default NosRealisations;