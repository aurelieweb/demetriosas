import React from 'react';
import Banner from '../../components/Banner';
import ImgPac from '../../assets/imgPac3.jpeg';
import ImgQualipac from '../../assets/AdobeStock_446444392_Preview.svg';
import ImgAide from '../../assets/AdobeStock_649310143_Preview.png';
import ImgChauffage from '../../assets/AdobeStock_390266372_Preview.jpeg'

function PompeAChaleur() {
  const pageTitle = "Pompe à Chaleur : Demetrio Installateur Expert Certifié RGE à Thonon";

  return (
    <div className='main'>
      <Banner pageTitle={pageTitle} />
      <section className='savoirFaire-section'>
      <img className="pac-img" src={ImgPac} alt="Installation Pac Thonon, Chablais" />
      <div className='savoirFaire-div'>
        <h2 className='section-text'>La Pompe à Chaleur : Une Solution Moderne et Écologique</h2>
        <div className='pac__div'>
          <p className='pac__div-text'>
            Les pompes à chaleur représentent une solution moderne et écologique pour le chauffage de votre maison. Les pompes à chaleur sont reconnues pour leur efficacité énergétique, leur respect de l'environnement et leurs économies d'énergie. De plus, elles offrent un chauffage performant en hiver et peuvent également assurer une climatisation efficace en été. Elles améliorent le confort intérieur en offrant un chauffage homogène tout en éliminant la nécessité de stocker des combustibles. De plus, les pompes à chaleur contribuent à réduire votre empreinte carbone, ce qui est essentiel dans notre société axée sur la durabilité.
          </p>

        </div>
        </div>
      </section>

      <section className='savoirFaire-section' id='certification__section'>
      <img className="pac-img" src={ImgQualipac} alt="Demetrio, certifié RGE Qualipac Thonon" />
      <div className='savoirFaire-div'>
        <h2 className='section-text'>La Certification RGE et QualiPAC</h2>
        <div className='pac-div'>
        <p className='pac__div-text'>
          Demetrio détient la certification QualiPAC, délivrée par l'organisme Qualit’EnR. Cette certification vise à reconnaître les professionnels de l'installation de pompes à chaleur aérothermiques et géothermiques pour leur savoir-faire et leur expertise. Nous sommes également labellisés RGE, ce qui signifie "Reconnu Garant de l'Environnement". Cette mention est décernée par les pouvoirs publics et l'Ademe. Depuis 2015, elle est devenue un critère essentiel pour être éligible aux aides gouvernementales, telles que l'Eco-PTZ ou le Crédit d'Impôt pour la Transition Énergétique. Cette certification est la garantie que les travaux réalisés par Demetrio respectent les normes de qualité les plus élevées. Nos professionnels RGE QualiPAC se distinguent par leur expertise dans le domaine des pompes à chaleur.
        </p>

        </div>
        </div>
      </section>

      <section className='savoirFaire-section' id='installation__section'>
        <div className='installation__section-header'>
          <img className="pac-img" src={ImgChauffage} alt="Installation Pac Thonon, Chablais" />
          <div className='savoirFaire-div'>
            <h2 className='section-text'>Pourquoi Choisir Demetrio en Tant qu'Installateur QualiPAC ?</h2>
            <p className='pac__div-text'>
              En faisant confiance à Demetrio pour votre projet d'installation de pompe à chaleur, vous faites confiance à une entreprise certifiée et reconnue pour son savoir-faire, son conseil et la qualité de ses installations.
            </p>
          </div>
        </div>
        <div className='installation__container'>
          <div className='installation__container-div'>
            <h3>Installateur QualiPAC</h3>
            <p>Nous sommes un installateur QualiPAC, ce qui signifie que nous détenons la certification QualiPAC délivrée par Qualit’EnR. Cette certification vise à reconnaître les professionnels de l'installation de pompes à chaleur aérothermiques et géothermiques pour leur expertise.</p>
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
          <div className='installation__container-img'>
            <img className="rge" src={ImgAide} alt="Demetrio, installateur agréé Ma prime renov, cee, rge à Thonon" />
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default PompeAChaleur;
