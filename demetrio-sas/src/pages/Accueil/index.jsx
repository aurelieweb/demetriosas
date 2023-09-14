import React from 'react';
import Card from '../../components/Card';
import Imgplomberie from '../../assets/test.jpeg';
import Imgchauffage from '../../assets/test.jpeg';
import Imgpac from '../../assets/test.jpeg';
import Slide from '../../components/Slide';

function Accueil() {

    const plomberie = "plomberie";
    const chauffage = "chauffage";
    const pac = "pac";
    
    return (
        <div className='main'>
            <section>
                <h2>Plomberie, Chauffage et Pompe à chaleur : Notre savoir-faire</h2>
                <p>Du Savoir-faire artisanal à l’innovation moderne, découvrez comment nous rédéfinissons votre confort</p>
                <div className='container__card'>
                    <Card serviceName="Plomberie" serviceSection={plomberie} imageUrl={Imgplomberie}/>
                    <Card serviceName="Chauffage" serviceSection={chauffage} imageUrl={Imgchauffage}/>
                    <Card serviceName="Pompe à chaleur" serviceSection={pac} imageUrl={Imgpac} />
                </div>
            </section>
            <section>
                <h2>A propos : Notre histoire, Nos valeurs</h2>
                <p>L'histoire de DEMETRIO est celle d'une passion partagée pour la plomberie, le chauffage et les pompes à chaleur, ancrée dans un engagement profond envers la qualité et l'environnement.</p>
                < Slide />
            
            </section>
            <section>
                <h2>Fiabilité et performance : Nos marques de références</h2>
                <p>Chaque marque que nous proposons est une garantie de qualité, de durabilité et de performances supérieures dans le domaine de la plomberie, du chauffage et des pompes à chaleur.</p>
                <div className='container__label'></div>
            </section>
        </div>
    );
}
export default Accueil;