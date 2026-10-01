import React, { useState } from 'react';
import '../../styles/styles.scss';
import ImgSlide from '../../assets/imgTeam.jpg';

// Fonction slide
function Slide() {
  const [selectedTab, setSelectedTab] = useState('histoire');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="slide">
      <img
        className="slide__image"
        src={ImgSlide}
        alt="Entreprise DEMETRIO, plombier chauffagiste à Allinges et Thonon-les-Bains"
      />

      <div className="slide__content">
        <div className="slide__content-tab">
          <ul>
            <li
              onClick={() => handleTabClick('histoire')}
              className={selectedTab === 'histoire' ? 'active' : ''}
            >
              Notre histoire
            </li>

            <li
              onClick={() => handleTabClick('valeurs')}
              className={selectedTab === 'valeurs' ? 'active' : ''}
            >
              Nos valeurs
            </li>
          </ul>
        </div>

        <div
          className={`slide__content-text ${
            selectedTab === 'histoire' ? 'text-a' : 'text-b'
          }`}
        >
          {selectedTab === 'histoire' ? (
            <>
              <p>
                <strong>
                  DEMETRIO est une entreprise familiale implantée à Allinges
                  depuis 2011
                </strong>
                , au cœur du Chablais. Stéphane exerce le métier de
                plombier-chauffagiste depuis plus de 20 ans et met son
                expérience au service des particuliers pour leurs projets de
                plomberie, chauffage, pompe à chaleur et climatisation.
              </p>

              <p>
                De l’installation traditionnelle aux solutions de chauffage
                plus performantes, notre métier a évolué au fil des années,
                mais notre façon de travailler est restée la même :{' '}
                <strong>
                  étudier chaque installation, choisir une solution adaptée et
                  soigner sa réalisation.
                </strong>
              </p>

              <p>
                Basés à Allinges, nous intervenons à Thonon-les-Bains et dans
                le Chablais, avec la volonté de rester une{' '}
                <strong>
                  entreprise locale, disponible et proche de ses clients.
                </strong>
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>
                  Pour nous, être artisan, ce n’est pas simplement installer
                  un équipement. C’est faire en sorte qu’il fonctionne bien et
                  qu’il tienne dans le temps.
                </strong>
              </p>

              <p>
                Cela signifie prendre le temps de réfléchir à une installation,
                choisir le matériel adapté et soigner ce qui se voit… mais
                aussi tout ce qui ne se verra plus une fois le chantier
                terminé.
              </p>

              <p>
                <strong>Conseil, expertise et proximité</strong> guident notre
                travail au quotidien. Nous privilégions des solutions fiables,
                performantes et adaptées aux besoins réels de chaque client,
                avec la même exigence de l’étude du projet jusqu’à sa
                réalisation.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slide;