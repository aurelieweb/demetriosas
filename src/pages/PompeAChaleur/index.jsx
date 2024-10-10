import React from 'react';
import Banner from '../../components/Banner';
import Faq from '../../components/Faq';
import ImgPac from '../../assets/imgPac3.jpeg';
import ImgQualipac from '../../assets/imgRGE.jpeg';
import ImgAide from '../../assets/imgPac.png';
import ImgChauffage from '../../assets/imgConfortChauffage.jpg';

/* Fonction Pompe à chaleur */
function PompeAChaleur() {
  const pageTitle = "Pompe à Chaleur : Demetrio Installateur Expert Certifié RGE à Thonon";

  // Function to open the Tally form popup
  const openTallyForm = () => {
    if (window.Tally) {
      window.Tally.openPopup('mVMp4J', {
        layout: 'modal',
        width: 700,
      });
    } else {
      console.error('Tally is not loaded yet');
    }
  };

  return (
    <div className='main'>
      <Banner pageTitle={pageTitle} />
        <section id="pac__section" className='savoirFaire-section'>
          <img className="pac-img" src={ImgPac} alt="Installation Pac Thonon, Chablais" />
          <div className='savoirFaire-div'>
            <h2 className='section-text'>La Pompe à Chaleur : Une Solution Moderne et Écologique</h2>
            <div className='pac__div'>
              <p className='pac__div-text'>La pompe à chaleur est une solution moderne et écologique qui vous permet de chauffer votre maison de manière plus efficace, tout en réduisant vos factures d'énergie. Vous pouvez réaliser jusqu'à <strong>60% d'économies</strong> par rapport aux systèmes de chauffage traditionnels.</p>
              <p className='pac__div-text'>Elle utilise des ressources renouvelables comme l'air ou le sol pour générer de la chaleur, ce qui en fait une option respectueuse de l'environnement et économique.</p>
              <p className='pac__div-text'>La pompe à chaleur est conçue pour avoir une <strong>longévité de plus de 15 ans</strong> avec un entretien minimal. Ce système robuste garantit des performances optimales sur le long terme, faisant de cet investissement un choix durable et fiable.</p>
              {/* Button to open the Tally form */}
              <button className="download-guide-button" onClick={openTallyForm}>
                Télécharger notre guide
              </button>
            </div>
          </div>
        </section>



      <section className='savoirFaire-section' id='certification__section'>
        <a href='https://www.qualit-enr.org/entreprises/demetrio/' className='pac-lien'><img className="pac-img-test" src={ImgQualipac} alt="Demetrio, certifié RGE Qualipac Thonon" /></a>
        <div className='savoirFaire-div'>
          <h2 className='section-text'>La Certification RGE et QualiPAC</h2>
          <div className='pac-div'>
            <p className='pac__div-text'>L'entreprise Demetrio détient fièrement la certification <strong>QualiPAC</strong>, délivrée par l'organisme <strong>Qualit’EnR</strong>, en reconnaissance de notre savoir-faire et de notre expertise.</p>
            <p className='pac__div-text'> Nous sommes également labellisés <strong>RGE</strong>, ce qui signifie "Reconnu Garant de l'Environnement". Cette mention, décernée par les pouvoirs publics et l'Ademe, est un <strong>critère essentiel pour être éligible aux aides gouvernementales</strong> telles que la Prim'Renov, l'Eco-PTZ ou le CEE pour la Transition Énergétique.</p>
            <p className='pac__div-text'> Les professionnels RGE QualiPAC se démarquent par leur expertise dans le domaine des pompes à chaleur.</p>
          </div>
          </div>
      </section>

      <section className='savoirFaire-section' id='operation__section'>
        <div className='video-wrapper'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/maSX4mcduAU?si=3OK0JK3WsTdqIgrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='savoirFaire-div'>
          <h2 className='section-text'>Comment fonctionne la Pompe à Chaleur</h2>
          <div className='pac-div'>
            <p className='pac__div-text'>La pompe à chaleur <strong>extrait la chaleur</strong> présente dans l'air, l'eau ou le sol et la transfère à l'intérieur de votre maison. Ce processus utilise un circuit réfrigérant qui <strong>capte cette énergie</strong> naturelle, puis la compresse pour en augmenter la température <strong>avant de la diffuser dans votre habitation</strong>.</p>
            <p className='pac__div-text'>Cette technologie permet de réduire considérablement vos factures d'énergie tout en utilisant des ressources renouvelables, ce qui en fait une solution à la fois écologique et économique.</p>
            {/*<p className='pac__div-text'>En été, certaines pompes à chaleur peuvent inverser ce processus pour rafraîchir votre maison, assurant ainsi un confort optimal tout au long de l'année.</p>*/}
          </div>
        </div>
      </section>

      <section className='savoirFaire-section' id='process__section'>
        <div className='savoirFaire-div'>
          <h2 className='section-text'>Comment se déroule l'installation d'une pompe à chaleur</h2>
          <div className='pac-div'>
            <p className='pac__div-text'>
              <strong>1. Premier contact :</strong> Nous discutons de votre projet d’installation de <strong>pompe à chaleur</strong> et vous conseillons sur la <strong>solution technique</strong> la plus adaptée à vos <strong>besoins énergétiques</strong>.
            </p>
            <p className='pac__div-text'>
              <strong>2. Vérification de l’éligibilité :</strong> Créez votre compte sur <strong>maprimerenov.gouv.fr</strong> et vérifiez votre <strong>éligibilité aux aides financières</strong> pour l’installation de votre pompe à chaleur.
            </p>
            <p className='pac__div-text'>
              <strong>3. Devis personnalisé :</strong> DEMETRIO, <strong>installateur certifié RGE</strong>, vous fournit un <strong>devis pompe à chaleur</strong> sur mesure, essentiel pour le montage de votre <strong>dossier d’aide</strong>.
            </p>
            <p className='pac__div-text'>
              <strong>4. Montage du dossier :</strong> Soumettez votre <strong>demande d’aide MaPrimeRénov' en ligne</strong> en transmettant le <strong>devis non signé</strong> de DEMETRIO via votre compte <strong>maprimerenov.gouv.fr</strong>.
            </p>
            <p className='pac__div-text'>
              <strong>5. Acceptation du dossier et du devis :</strong> Après la <strong>validation du dossier MaPrimeRénov'</strong>, confirmez le devis DEMETRIO et lancez les <strong>travaux d'installation de votre pompe à chaleur</strong>.
            </p>
            <p className='pac__div-text'>
              <strong>6. Finalisation et versement de l’aide :</strong> Une fois les <strong>travaux terminés</strong>, transmettez la <strong>facture pompe à chaleur</strong> via votre compte MaPrimeRénov'. Vous recevrez l'<strong>aide financière</strong> par virement sous quatre mois maximum.
            </p>
          </div>
          {/* Button to open the Tally form */}
          <button className="download-guide-button" onClick={openTallyForm}>
                Télécharger notre guide
          </button>
        </div>
        <div className='installation__container-img'>
              <img className="rge" src={ImgAide} alt="Demetrio, installateur agréé Ma prime renov, cee, rge à Thonon" />
        </div>
      </section>

      <section className='savoirFaire-section' id='installation__section'>
        <div className='installation__section-header'>
          <div className='savoirFaire-div'>
            <h2 className='section-text'>Pourquoi choisir Demetrio en tant qu'Installateur QualiPAC ?</h2>
            <p className='pac__div-text'>
              En faisant confiance à Demetrio pour votre projet d'installation de pompe à chaleur, vous faites confiance à une entreprise certifiée et reconnue pour son savoir-faire, son conseil et la qualité de ses installations.
            </p>
            
          </div>
          <img className="pac-img" src={ImgChauffage} alt="Installation Pac Thonon, Chablais" />
        </div>
        <div className='installation__container'>
          <div className='installation__container-div'>
            <h3>Installateur QualiPAC</h3>
            <p>Nous sommes un installateur QualiPAC, et détenons la certification QualiPAC délivrée par <strong>Qualit’EnR</strong>,Vette certification reconnait notre expertise dans l'installation de pompes à chaleur aérothermiques et géothermiques.</p>
          </div>

          <div className='installation__container-div'>
            <h3>Conseils Personnalisés</h3>
            <p>Nous vous recommandons la pompe à chaleur la mieux adaptée à votre budget et à votre maison, en vous fournissant des conseils personnalisés.</p>
          </div>

          <div className='installation__container-div'>
            <h3>Assurances Obligatoires</h3>
            <p>Nous sommes en conformité avec toutes les assurances obligatoires pour vous garantir une installation en toute sécurité.</p>
          </div>

          <div className='installation__container-div'>
            <h3>Formation Spécifique</h3>
            <p>Nos équipes ont suivi des formations spécifiques pour garantir leur expertise dans l'installation de pompes à chaleur.</p>
          </div>

          <div className='installation__container-div'>
            <h3>Audits Réguliers</h3>
            <p>Nous sommes soumis à des audits aléatoires pour assurer la qualité de nos installations.</p>
          </div>

          <div className='installation__container-div'>
            <h3>Charte QualiPAC</h3>
            <p>Nous respectons les 10 points de la charte QualiPAC, garantissant ainsi des normes éthiques élevées dans notre travail.</p>
          </div>

          <div className='installation__container-div'>
            <h3>Aides au Financement</h3>
            <p>En travaillant avec Demetrio, vous avez également accès à des aides financières pour soutenir votre projet.</p>
          </div>
        </div>
      </section>

      < Faq/>
    </div>

    
  );
}

export default PompeAChaleur;
