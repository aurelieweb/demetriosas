import React, { useState } from 'react';
import '../../styles/styles.scss';
import ImgSlide from '../../assets/imgTeam.jpeg';

function Slide() {
  const [selectedTab, setSelectedTab] = useState('histoire');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="slide">
      <img className="slide__image" src={ImgSlide} alt="Plombier Thonon, Allinges et Chablais" />
      <div className="slide__content">
        <div className='slide__content-tab'>
          <ul>
            <li onClick={() => handleTabClick('histoire')}>Notre histoire</li>
            <li onClick={() => handleTabClick('valeurs')}>Nos valeurs</li>
          </ul>
        </div>

        <div className={`slide_content-text ${selectedTab === 'histoire' ? 'text-a' : 'text-b'}`}> {/* affichage conditionnel*/}
          {selectedTab === 'histoire' ? (
            <>
              <p>DEMETRIO, entreprise familiale spécialisée dans le dépannage, l’installation de système de chauffage, de plomberie et de pompes à chaleur, est ancrée dans la préservation de la planète et du savoir-faire local.</p>
              <p>Basée à Allinges, nous intervenons dans la région de Thonon-les-Bains et du Chablais avec réactivité et expertise, tout en incarnant nos valeurs d’intégrité et de qualité.</p>
              <p>Depuis plus de 20 ans, nous mettons notre passion pour la plomberie et le chauffage au service de notre engagement pour l’environnement et nos clients.</p>
            </>
          ) : (
            <>
              <p>Nous privilégions des fournisseurs français et européens, marquant ainsi notre engagement envers l’environnement et l’économie locale.</p>
              <p>Chaque installation est pensée pour allier efficacité énergétique et réduction des émissions de carbone, contribuant ainsi à un avenir plus durable.</p>
              <p>Notre équipe expérimentée est fière de concevoir des solutions durables et performantes avec un service après-vente fiable, garantissant votre tranquillité d’esprit à chaque étape.</p>
              <p>Ensemble, créons un avenir plus éthique et plus confortable.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slide;

