import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFaucet, faThermometer, faHome } from '@fortawesome/free-solid-svg-icons';

import serviceImg from '../../assets/test.jpeg';


function NotreSavoirFaire () {

    const pageTitle = "Notre savoir-faire : Plomberie, Chauffage et Pompe à chaleur";

    const plomberie = "plomberie";
    const chauffage = "chauffage";
    const pac = "pac";

    return (
        <div className='main'>
            <Banner pageTitle={pageTitle}/>
            <section >
                <h2>Découvrez Nos Services Expert en Plomberie, Chauffage et Pompes à Chaleur</h2>
                <p>Notre  expertise s'étend sur trois domaines essentiels : la plomberie, le chauffage et les pompes à chaleur. Nous sommes fiers de mettre notre savoir-faire à votre service pour répondre à vos besoins en matière de confort et de performance, que ce soit dans le cadre de la construction neuve ou de la rénovation. Notre équipe expérimentée est là pour vous accompagner tout au long de vos projets, en vous offrant des solutions sur mesure.</p>
                <div className='container__card'>
                    <Card serviceName="Plomberie" serviceSection={plomberie} icon={<FontAwesomeIcon icon={faFaucet} />} />
                    <Card serviceName="Chauffage" serviceSection={chauffage} icon={<FontAwesomeIcon icon={faThermometer}/>} />
                    <Card serviceName="Pompe à chaleur" serviceSection={pac} icon={<FontAwesomeIcon icon={faHome} />} />
                </div>
            
            </section>
            <section className='plomberie'>
                <img className="service-img" src={serviceImg} alt="Service plomberie Thonon" />
                <h2>Services de Plomberie: Installation et Dépannage à Thonon les Bains</h2>
                <p>Notre expertise en plomberie est la garantie d'une solution efficace à tous vos besoins. Nous sommes prêts à résoudre tous vos problèmes de plomberie, de la fuite au projet de création ou rénovation de salle de bains.</p>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} /> Dépannage plomberie</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Réparation de fuite</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Installation et remplacement de robinet</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Débouchage de canalisations</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Rénovation de salle de bains</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Installation et remplacement chauffe-eau</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Installation et remplacement chauffe-eau thermodynamique</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Installation de tuyauterie</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Installation réseau plomberie neuf et rénovation</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Remplacement wc</li>
                </ul>
            </section>
            <section className='chauffage'>
                <img className="service-img" src={serviceImg} alt="Service plomberie Thonon" />
                <h2>Chauffage à Thonon les bains: Votre partenaire de confiance</h2>
                <p>Découvrez notre gamme complète de services de chauffage dédiés à votre confort. De l'installation à l'entretien, nous sommes votre partenaire de confiance pour créer un environnement chaleureux et confortable au sein de votre foyer.</p>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} /> Remplacement de radiateur</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Installation radiateur</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Installation plancher chauffant</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Remplacement vannes thermostatiques</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Réparation de chaudières</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Désembouage plancher chauffant</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Dépannage installation de chauffage</li>
                </ul>


            </section>
            <section className='pac'>
                <img className="service-img" src={serviceImg} alt="Service plomberie Thonon" />
                <h2>Installation de pompe à chaleur à Thonon les Bains et dans le chablais</h2>
                <p>Les pompes à chaleur sont l'avenir du chauffage écoénergétique. Chez DEMETRIO, nous sommes fiers de proposer des solutions de chauffage respectueuses de l'environnement pour un avenir plus durable.</p>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} />Installation de pompes à chaleur air-eau</li>
                    <li><FontAwesomeIcon icon={faCheck} />Remplacement de chaudière fuel/gaz par pompe à chaleur</li>
                </ul>

            </section>
        </div>
    );
}
export default NotreSavoirFaire;