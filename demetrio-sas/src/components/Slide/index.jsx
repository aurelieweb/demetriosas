import React from 'react';
import '../../styles/styles.scss';
import ImgSlide from '../../assets/test.jpeg';


function Slide() {

  return (

      <div className="slide">
        <img className="slide__image" src={ImgSlide} alt="Plombier Thonon, Allinges et chablais" />
        <div className="slide__content">
          <div className='slide__content-tab'>
              <ul>
                <li>Notre histoire</li>
                <li>Nos valeurs</li>
              </ul>
          </div>

          <div className='slide_content-text'>
            <p>DEMETRIO, entreprise familiale spécialisée dans le dépannage, l’installation de système de chauffage, de plomberie et de pompes à chaleur, est ancrée dans la préservation de la planète et du savoir-faire local.</p>

            <p>Basée à Allinges, nous intervenons dans la région de Thonon-les-Bains et du Chablais avec réactivité et expertise, tout en incarnant nos valeurs d’intégrité et de qualité.</p>

            <p>Depuis plus de 20 ans, nous mettons notre passion pour la plomberie et le chauffage au service de notre engagement pour l’environnement et nos clients.</p>
          </div>
        </div>
      </div>

  );
}

export default Slide;