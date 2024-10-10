import React from 'react';
import Banner from '../../components/Banner';
/*import Gallery from '../../components/Gallery';*/
import MaintenancePage from '../../components/MaintenancePage';

const buttons = [
    { text: 'Demande d\'intervention', link: '/devis-en-ligne' },
  ];

function NosRealisations() {

    const pageTitle = "Expert plomberie, Chauffage et Pompe à chaleur à Thonon";

    return (
        <div className='main'>
            <Banner 
                pageTitle={pageTitle}
                buttons={buttons} 
            />
            <section className='gallery__section'>
                <h2>Découvrez Nos Réalisations en Plomberie, Chauffage et Pompes à Chaleur</h2>
                {/*<p className='section-text'>
                De la rénovation éco-responsable à l'installation de systèmes de chauffage modernes, nos projets illustrent notre passion pour la durabilité, le confort et la satisfaction de nos clients. Chaque réalisation témoigne de notre engagement envers l'innovation, la précision et l'efficacité énergétique. 
                Explorez nos réalisations et laissez-vous inspirer pour votre prochain projet de salle de bains ou chauffage.   
                </p>
                <Gallery />*/}
            </section>
            <MaintenancePage />
        </div>
    );
}

export default NosRealisations;