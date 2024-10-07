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
              <p className='pac__div-text'>En plus de chauffer, certaines pompes à chaleur permettent également de rafraîchir votre maison pendant les mois chauds, offrant ainsi un confort optimal tout au long de l'année.</p>
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
            <p className='pac__div-text'> Nous sommes également labellisés <strong>RGE</strong>, ce qui signifie "Reconnu Garant de l'Environnement". Cette mention, décernée par les pouvoirs publics et l'Ademe, est un <strong>critère essentiel pour être éligible aux aides gouvernementales</strong> telles que l'Eco-PTZ ou le Crédit d'Impôt pour la Transition Énergétique.</p>
            <p className='pac__div-text'> Les professionnels RGE QualiPAC se démarquent par leur expertise dans le domaine des pompes à chaleur.</p>
          </div>
          </div>
      </section>

      <section className='savoirFaire-section' id='operation__section'>
        <div className='video-wrapper'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/maSX4mcduAU?si=3OK0JK3WsTdqIgrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='savoirFaire-div'>
          <h2 className='section-text'>Comment fonctionne la Pompe à Chaleur</h2>
          <div className='pac-div'>
            <p className='pac__div-text'>La pompe à chaleur extrait la chaleur présente dans l'air, l'eau ou le sol et la transfère à l'intérieur de votre maison. Ce processus utilise un circuit réfrigérant qui capte cette énergie naturelle, puis la compresse pour en augmenter la température avant de la diffuser dans votre habitation.</p>
            <p className='pac__div-text'>Cette technologie permet de réduire considérablement vos factures d'énergie tout en utilisant des ressources renouvelables, ce qui en fait une solution à la fois écologique et économique.</p>
            <p className='pac__div-text'>En été, certaines pompes à chaleur peuvent inverser ce processus pour rafraîchir votre maison, assurant ainsi un confort optimal tout au long de l'année.</p>
          </div>
        </div>
      </section>

      <section className='savoirFaire-section' id='installation__section'>
        <div className='installation__section-header'>
          <div className='savoirFaire-div'>
            <h2 className='section-text'>Pourquoi Choisir Demetrio en tant qu'Installateur QualiPAC ?</h2>
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

      <section className='savoirFaire-section' id='process__section'>
  <img className="pac-img" src={ImgChauffage} alt="Installation Pac Thonon, Chablais" />
  <div className='savoirFaire-div'>
    <h2 className='section-text'>Comment se déroule l'installation d'une pompe à chaleur</h2>
    <div className='pac-div'>
      <p className='pac__div-text'>
        <strong>Premier contact :</strong> Tout commence par un premier échange avec notre équipe pour comprendre vos besoins spécifiques et évaluer si une pompe à chaleur est la solution adaptée pour votre maison. Nous analysons votre logement et vos attentes pour vous proposer la meilleure option.
      </p>
      <p className='pac__div-text'>
        <strong>Devis personnalisé :</strong> Suite à cette première consultation, nous vous fournissons un devis détaillé et personnalisé. Ce devis inclut une estimation des coûts pour l'installation ainsi que les différentes options de financement et d'aides disponibles.
      </p>
      <p className='pac__div-text'>
        <strong>Demande d'aides financières :</strong> Nous vous accompagnons dans la demande des aides financières telles que MaPrimeRénov' et les Certificats d'Économies d'Énergie (CEE). Notre équipe se charge de vous guider à travers les démarches administratives afin de maximiser vos aides.
      </p>
      <p className='pac__div-text'>
        <strong>Installation :</strong> Une fois le devis validé, nos techniciens qualifiés procèdent à l'installation de la pompe à chaleur. L'installation est réalisée dans les règles de l'art et dans le respect des délais convenus, en minimisant les interruptions dans votre quotidien.
      </p>
      <p className='pac__div-text'>
        <strong>Mise en service :</strong> Une fois la pompe à chaleur installée, nous procédons à la mise en service. Cela inclut des tests pour s'assurer que le système fonctionne de manière optimale, ainsi que des explications sur son utilisation. Vous êtes prêt à profiter d'un confort thermique tout au long de l'année.
      </p>
    </div>
  </div>
</section>


      < Faq/>
      <div className='installation__container-img'>
            <img className="rge" src={ImgAide} alt="Demetrio, installateur agréé Ma prime renov, cee, rge à Thonon" />
          </div>
    </div>

    
  );
}

export default PompeAChaleur;
