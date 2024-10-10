import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const FaqData = [
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
    

  const handleCardClick = (index) => {
    const currentIndex = openIndices.indexOf(index);
    if (currentIndex === -1) {
      // If the index is not in the openIndices array, add it
      setOpenIndices([...openIndices, index]);
    } else {
      // If the index is already in the openIndices array, remove it
      setOpenIndices(openIndices.filter((i) => i !== index));
    }
  };

  return (
    <section id='faq'>
      <h2>FAQ : Tout savoir sur l'installation et les aides pour pompe à chaleur</h2>
      <div className='faq__container'>
        {FaqData.map((card, index) => (
          <div key={index} className='faq__card' onClick={() => handleCardClick(index)}>
            <div className="faq__card-title">
              <div className="card__title-div">
                <FontAwesomeIcon className="faq__card-icon" icon={card.icon} />
                <h3>{card.title}</h3>
              </div>
              <FontAwesomeIcon icon={openIndices.includes(index) ? faChevronUp : faChevronDown} />
            </div>

            {openIndices.includes(index) && (
              <div className="faq__card-text">
                {card.content.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
