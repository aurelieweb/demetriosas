import React from 'react';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';

function NosRealisations() {

    const pageTitle = "Expert plomberie, Chauffage et Pompe à chaleur à Thonon";

    return (
        <div className='main'>
            <Banner pageTitle={pageTitle}/>
            <section>
                <h2>Découvrez Nos Réalisations en Plomberie, Chauffage et Pompes à Chaleur</h2>
                <Gallery />
            </section>
        </div>
    );
}

export default NosRealisations;