import React from 'react';
import Banner from '../../components/Banner';
import DevisForm from'../../components/DevisForm';
import ImgDevis from '../../assets/imgDevis.jpg'

function Devis() {

    const pageTitle = "Devis en Ligne Plomberie, Chauffage et Pompe à Chaleur à Thonon-les-Bains";

    return (
        <div className='main'>
            <Banner pageTitle={pageTitle}/>
            <section>
                <h2>Devis en ligne : Simple, Rapide et Efficace</h2>
                <p className='section-text'>Obtenez votre devis personnalisé en ligne pour vos projets de Plomberie, Chauffage et Pompes à Chaleur en quelques clics par des experts certifiés RGE QualiPAC</p>
                <div className='container__devis'>
                    <div className='devis__content'>
                        <div className='devis__content-text'>
                            <p>Vous pouvez maintenant faire vos demandes de devis en ligne depuis votre smartphone, tablette ou ordinateur en quelques clics.</p>
                            <p>Pour cela, il vous suffit de remplir le formulaire de demande de devis en ligne.</p>
                            <p>Vous pouvez joindre une photo de votre panne ou les plans de votre projet.</p>
                            <p>Nous étudierons votre demande dans les plus brefs délais.</p>
                        </div>
                        <img className='devis__content-img' src={ImgDevis} alt='Plan maison'/>
                    </div>
                    <DevisForm id='devis__form' />
                </div>
            </section>

            </div>
    );
}
export default Devis;          