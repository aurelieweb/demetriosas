import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const Faq = ({ faqData, faqTitle, faqLabel }) => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleCardClick = (index) => {
    const currentIndex = openIndices.indexOf(index);

    if (currentIndex === -1) {
      setOpenIndices([...openIndices, index]);
    } else {
      setOpenIndices(
        openIndices.filter((i) => i !== index)
      );
    }
  };

  return (
    <section id="faq">

      <div className="section-heading">
        <span className="section-heading__label">
          {faqLabel}
        </span>

        <h2>{faqTitle}</h2>
      </div>

      <div className="faq__container">
        {faqData.map((card, index) => (
          <div
            key={index}
            className="faq__card"
            onClick={() => handleCardClick(index)}
          >
            <div className="faq__card-title">

              <div className="card__title-div">
                <FontAwesomeIcon
                  className="faq__card-icon"
                  icon={card.icon}
                />

                <h3>{card.title}</h3>
              </div>

              <FontAwesomeIcon
                icon={
                  openIndices.includes(index)
                    ? faChevronUp
                    : faChevronDown
                }
              />

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
};

export default Faq;