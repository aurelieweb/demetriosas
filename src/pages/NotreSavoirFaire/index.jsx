import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Button from '../../components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFaucet, faTemperatureHalf, faSeedling } from '@fortawesome/free-solid-svg-icons';

import Imgplomberie from '../../assets/imgSdb.jpg';
import Imgchauffage from '../../assets/imgChauffage.jpg';
import Imgpac from '../../assets/imgPac.jpg';


const buttons = [
    { text: 'Demande d\'intervention', link: '/devis-en-ligne' },
  ];


function NotreSavoirFaire () {

    const pageTitle = "Notre savoir-faire : Plomberie, Chauffage et Pompe à chaleur";

    const plomberie = "plomberie";
    const chauffage = "chauffage";
    const pac = "pac";

    return (
        <div className='main'>
            <Banner 
                pageTitle={pageTitle}
                buttons={buttons} 
            />
            <section>
                <h2>Découvrez Nos Services Expert en Plomberie, Chauffage et Pompes à Chaleur</h2>
                <p className='section-text'>Notre  expertise s'étend sur trois domaines essentiels : la plomberie, le chauffage et les pompes à chaleur. Nous sommes fiers de mettre notre savoir-faire à votre service pour répondre à vos besoins en matière de confort et de performance, que ce soit dans le cadre de la construction neuve ou de la rénovation. Notre équipe expérimentée est là pour vous accompagner tout au long de vos projets, en vous offrant des solutions sur mesure.</p>
                <div className='container__card savoirFaire-card'>
                    <Card serviceName="Plomberie" serviceSection={plomberie} icon={<FontAwesomeIcon icon={faFaucet} />} />
                    <Card serviceName="Chauffage" serviceSection={chauffage} icon={<FontAwesomeIcon icon={faTemperatureHalf}/>} />
                    <Card serviceName="Pompe à chaleur" serviceSection={pac} icon={<FontAwesomeIcon icon={faSeedling} />} />
                </div>
            
            </section>
            <section  id="plomberie" className='savoirFaire-section'>
                <img className="service-img" src={Imgplomberie} alt="Création de salle de bains style industriel, nature à Thonon" />
            
                <div className='savoirFaire-div'>
                    <h2 className='section-text'>Services de Plomberie: Installation et Dépannage à Thonon les Bains</h2>
                    <p>Notre expertise en plomberie est la garantie d'une solution efficace à tous vos besoins. Nous sommes prêts à résoudre tous vos problèmes de plomberie, de la fuite au projet de création ou rénovation de salle de bains.</p>
                    <ul>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Dépannage plomberie</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Réparation de fuite</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Installation et remplacement de robinet</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Débouchage de canalisations</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Rénovation de salle de bains</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Installation et remplacement chauffe-eau</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Installation et remplacement chauffe-eau thermodynamique</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Installation de tuyauterie</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Installation réseau plomberie neuf et rénovation</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Remplacement wc</p></li>
                    </ul>
                </div>
            </section>

            <section id="chauffage" className='savoirFaire-section'>
                <img className="service-img" src={Imgchauffage} alt="Réglage thermostat d'ambiance Thonon" />
                <div className='savoirFaire-div'>   
                    <h2 className='section-text'>Chauffage à Thonon les bains: Votre partenaire de confiance</h2>
                    <p>Découvrez notre gamme complète de services de chauffage dédiés à votre confort. De l'installation à l'entretien, nous sommes votre partenaire de confiance pour créer un environnement chaleureux et confortable au sein de votre foyer.</p>
                    <ul>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Remplacement de radiateur</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Installation radiateur</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Installation plancher chauffant</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Remplacement vannes thermostatiques</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Réparation de chaudières</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Désembouage plancher chauffant</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Dépannage installation de chauffage</p></li>
                    </ul>
                </div>
            </section>

            <section id="pac" className='savoirFaire-section'>
                <img className="service-img" src={Imgpac} alt="Installation de pompe à chaleur Thonon, Allinges" />

                <div className='savoirFaire-div'>    
                    <h2 className='section-text'>Installation de pompe à chaleur à Thonon les Bains et dans le chablais</h2>
                    <p>Les pompes à chaleur sont l'avenir du chauffage écoénergétique. Chez DEMETRIO, nous sommes fiers de proposer des solutions de chauffage respectueuses de l'environnement pour un avenir plus durable.</p>
                    <ul>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Installation de pompes à chaleur air-eau</p></li>
                        <li><FontAwesomeIcon className='check' icon={faCheck} /> <p>Remplacement de chaudière fuel/gaz par pompe à chaleur</p></li>
                    </ul>
                    <Link to="/pompes-a-chaleur#pac__section"><Button text={"+ d'info"}/></Link>
                </div>
            </section>
            
        </div>
    );
}
export default NotreSavoirFaire;