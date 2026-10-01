import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import '../../styles/styles.scss';
import galleryData from '../../data/galleryData.json';

function Gallery() {

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const categories = [
    'Toutes',
    'Plomberie',
    'Chauffage',
    'Pompe à chaleur',
    'Climatisation'
  ];

  const filteredGallery =
    selectedCategory === 'Toutes'
      ? galleryData
      : galleryData.filter(
          (item) => item.category === selectedCategory
        );

  const openSlideshow = (item) => {
    setSelectedItem(item);
  };

  const closeSlideshow = () => {
    setSelectedItem(null);
  };

  return (
    <>

      {/* ========================================
          FILTRES
      ======================================== */}

      <nav
        className="gallery-filters"
        aria-label="Filtrer les réalisations"
      >

        {categories.map((category) => (

          <button
            key={category}
            type="button"
            className={`gallery-filter ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </nav>


      {/* ========================================
          GALERIE
      ======================================== */}

      <div className="gallery">

        {filteredGallery.map((item) => (

<article
  className="gallery__card"
  key={item.id}
  onClick={() => openSlideshow(item)}
>
  <div className="gallery__card-image">
    <img
      className="gallery__card-img"
      src={
        process.env.PUBLIC_URL +
        `/photoGallery/${item.cover}`
      }
      alt={item.title}
    />
  </div>

  <div className="gallery__card-content">

    <span className="gallery__card-category">
      {item.category}
    </span>

    <h3 className="gallery__card-title">
      {item.title}
    </h3>

    <p className="gallery__card-description">
      {item.description}
    </p>

    <div className="gallery__card-footer">

      <span className="gallery__card-location">
        <FontAwesomeIcon icon={faLocationDot} />
        {item.lieu}
      </span>

      <span className="gallery__card-link">
        Voir le chantier
        <span aria-hidden="true"> →</span>
      </span>

    </div>

  </div>
</article>

        ))}

      </div>


      {/* ========================================
          SLIDESHOW
      ======================================== */}

      {selectedItem && (

        <div
          className="slideshow-overlay"
          onClick={closeSlideshow}
        >

          <button
            className="close-button"
            onClick={closeSlideshow}
            aria-label="Fermer la galerie"
          >
            &times;
          </button>

          <div
            className="carousel-container"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="carousel-header">

              <span className="gallery__card-category">
                {selectedItem.category}
              </span>

              <h2>
                {selectedItem.title}
              </h2>

              <p className="gallery__card-location">
                <FontAwesomeIcon icon={faLocationDot} />
                {selectedItem.lieu}
              </p>

            </div>

            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
            >

              {selectedItem.img.map((imageName, index) => (

                <div key={index}>

                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/photoGallery/${imageName}`
                    }
                    alt={`${selectedItem.title} - photo ${index + 1}`}
                  />

                </div>

              ))}

            </Carousel>

            <div className="carousel-description">
              <p>
                {selectedItem.description}
              </p>
            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Gallery;