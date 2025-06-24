import React, { useState } from 'react';
import Banner from '../../components/Banner';
import Faq from '../../components/Faq';
import ImgPac from '../../assets/imgPac3.jpeg';
import ImgQualipac from '../../assets/imgRGE.jpeg';
import ImgAide from '../../assets/imgPac.png';
import ImgChauffage from '../../assets/imgConfortChauffage.jpg';
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Testimonies from '../../components/Testimonies';
import CtaSection from '../../components/CtaSection';
import ModalIntervention from '../../components/ModalIntervention';

const buttons = [
  { text: 'Demande de devis', link: '/devis-en-ligne' },
];



const faqTitlePac = 'F.A.Q.';

  const faqDataPac = [
      {
        title: "Combien de temps dure l'installation d'une pompe à chaleur ?",
        content: [
          "En général, l'installation d'une pompe à chaleur prend entre 2 à 5 jours, selon la complexité du projet et les spécificités de votre maison. Nous nous assurons que tout est installé correctement et en conformité avec les normes en vigueur."
        ],
        icon: faCircleQuestion
      },
      {
        title: "Quels types d'aides financières sont disponibles pour l'installation de pompe à chaleur ?",
        content: [
          "Vous pouvez bénéficier de plusieurs aides comme MaPrimeRénov’, les Certificats d'Économies d'Énergie (CEE), et l'Éco-PTZ. Nous vous accompagnons dans le montage de votre dossier afin que vous puissiez maximiser vos aides et réduire votre investissement initial."
        ],
        icon: faCircleQuestion
      },
      {
        title: "Quel est le coût moyen d'une installation de pompe à chaleur ?",
        content: [
          "Le coût d'une installation de pompe à chaleur varie en fonction de la taille de votre maison, du type de pompe à chaleur (air/eau), et de vos besoins spécifiques. En moyenne, une installation complète peut coûter entre 10 000€ et 20 000€, avant aides financières."
        ],
        icon: faCircleQuestion
      },
      {
        title: "Quelle est la durée de vie d'une pompe à chaleur ?",
        content: [
          "La durée de vie d'une pompe à chaleur est généralement de 15 à 20 ans. Avec un entretien régulier, assuré par nos fournisseurs, vous pouvez maximiser la longévité et l'efficacité de votre installation."
        ],
        icon: faCircleQuestion
      },
      {
        title: "Est-ce que l'installation d'une pompe à chaleur nécessite des travaux importants ?",
        content: [
          "L'installation d'une pompe à chaleur air/eau nécessite des travaux modérés. Nous nous assurons que l'impact sur votre maison est minimal et que les installations sont réalisées dans les délais convenus."
        ],
        icon: faCircleQuestion
      },
      {
        title: "Peut-on installer une pompe à chaleur dans une maison ancienne ?",
        content: [
          "Oui, il est tout à fait possible d'installer une pompe à chaleur dans une maison ancienne. Notre équipe évalue les spécificités de votre logement pour vous proposer la solution la plus adaptée à vos besoins."
        ],
        icon: faCircleQuestion
      },
      {
        title: "Quels sont les avantages d'une pompe à chaleur par rapport aux autres systèmes de chauffage ?",
        content: [
          "La pompe à chaleur permet de réaliser jusqu'à 60% d'économies sur vos factures de chauffage. De plus, elle utilise des ressources renouvelables, ce qui en fait une solution écologique et économique sur le long terme."
        ],
        icon: faCircleQuestion
      },
      {
        title: "Faut-il entretenir régulièrement une pompe à chaleur ?",
        content: [
          "Oui, un entretien régulier est essentiel pour garantir le bon fonctionnement de votre pompe à chaleur et prolonger sa durée de vie. Cet entretien est assuré par nos fournisseurs partenaires pour que vous puissiez en profiter sans souci."
        ],
        icon: faCircleQuestion
      },
      {
        title: "Puis-je conserver mes radiateurs ou mon ancien système de chauffage avec l'installation d'une pompe à chaleur ?",
        content: [
          "Oui, dans de nombreux cas, il est possible de conserver vos anciens radiateurs ou votre ancien circuit de chauffage en le couplant à votre nouvelle pompe à chaleur. Nous analysons votre installation actuelle pour vous proposer la meilleure solution, en tenant compte de vos équipements existants."
        ],
        icon: faCircleQuestion
      },
    ];

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

    const questions = [
    {
      id: '1',
      question: "De quel type de demande s'agit-il ?",
      options: ["Demande d'intervention", 'Demande de devis'],
    },
    {
      id: '2',
      question: "S'agit-il d'une demande de dépannage ?",
      options: ['Oui', 'Non'],
    },
    {
      id: '3',
      question: 'Quel domaine concerne votre demande ?',
      options: ['Plomberie', 'Chauffage', 'Pompe à chaleur'],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='main'>
      <Banner 
        pageTitle={pageTitle}
        buttons={buttons} 
      />
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

      <ModalIntervention isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} questions={questions} />

    <CtaSection
        title="Installation de pompe à chaleur à Thonon et dans le Chablais"
        text="Besoin d’une solution performante et économique pour chauffer votre logement ? Faites une demande de devis ou réalisez une étude personnalisée pour l’installation de votre pompe à chaleur à Thonon, Allinges ou dans le Chablais. Notre équipe vous accompagne pas à pas."
        buttonLabel="Demander un devis"
        onClick={() => setIsModalOpen(true)}
        questions={questions}
      />
          <Testimonies/>
      < Faq
       faqData={faqDataPac}
       faqTitle={faqTitlePac}
      />
    </div>

    
  );
}

export default PompeAChaleur;