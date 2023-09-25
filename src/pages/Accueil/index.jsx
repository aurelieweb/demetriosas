import React from 'react';
import Banner from '../../components/Banner';
import Slide from '../../components/Slide';
import Card from '../../components/Card';
import Imgplomberie from '../../assets/imgPlomberie.jpg';
import Imgchauffage from '../../assets/imgChauffage.jpg';
import Imgpac from '../../assets/imgPac.jpg';
import LogoAtlantic from '../../assets/logo-atlantic.jpg';
import LogoThermor from '../../assets/logo-thermor.png';
import LogoCedeo from '../../assets/logo-cedeo.png';
import LogoGrohe from '../../assets/logo-grohe.svg';
import LogoHansgrohe from '../../assets/logo-hansgrohe.png';

function Accueil() {

    const pageTitle = "Expert plomberie, Chauffage et Pompe à chaleur à Thonon";

    const plomberie = "plomberie";
    const chauffage = "chauffage";
    const pac = "pac";
    
    return (
        <div className='main'>
            <Banner pageTitle={pageTitle}/>
            <section>
                <h2>Plomberie, Chauffage et Pompe à chaleur :<br /> Notre savoir-faire</h2>
                <p className='section-text'>Du Savoir-faire artisanal à l’innovation moderne, découvrez comment nous rédéfinissons votre confort</p>
                <div className='container__card'>
                    <Card serviceName="Plomberie" serviceSection={plomberie} imageUrl={Imgplomberie}/>
                    <Card serviceName="Chauffage" serviceSection={chauffage} imageUrl={Imgchauffage}/>
                    <Card serviceName="Pompe à chaleur" serviceSection={pac} imageUrl={Imgpac} />
                </div>
            </section>
            <section>
                <h2>A propos :<br />  Notre histoire, Nos valeurs</h2>
                <p className='section-text'>L'histoire de DEMETRIO est celle d'une passion partagée pour la plomberie, le chauffage et les pompes à chaleur, ancrée dans un engagement profond envers la qualité et l'environnement.</p>
                < Slide />
            </section>
            <section>
                <h2>Fiabilité et performance :<br />  Nos marques de références</h2>
                <p className='section-text'>Chaque marque que nous proposons est une garantie de qualité, de durabilité et de performances supérieures dans le domaine de la plomberie, du chauffage et des pompes à chaleur.</p>
                <div className='container__label'>
                    <a href='https://www.atlantic.fr/' className='label' ><img src={LogoAtlantic} alt='LogoAtlantic'/></a>
                    <a href='https://www.thermor.fr/' className='label'><img src={LogoThermor} alt='LogoAtlantic'/></a>
                    <a href='https://www.cedeo.fr/' className='label'><img src={LogoCedeo} alt='LogoAtlantic'/></a>
                    <a href='https://www.grohe.fr/fr_fr/particuliers.html?target_group=end' className='label'><img src={LogoGrohe} alt='LogoAtlantic'/></a>
                    <a href='https://www.hansgrohe.fr/' className='label'><img src={LogoHansgrohe} alt='LogoAtlantic'/></a>
                </div>
            </section>
        </div>
    );
}
export default Accueil;