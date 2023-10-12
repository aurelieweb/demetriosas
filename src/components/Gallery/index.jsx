import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../styles/styles.scss';
import galleryData from '../../data/galleryData.json';

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openSlideshow = (itemId) => {
    setSelectedItem(itemId - 1);
  };

  const closeSlideshow = () => {
    setSelectedItem(null);
  };

  const goToPreviousSlide = () => {
    setSelectedItem((selectedItem - 1 + galleryData.length) % galleryData.length);
  };

  const goToNextSlide = () => {
    setSelectedItem((selectedItem + 1) % galleryData.length);
  };

  return (
    <div className="gallery">
      {galleryData.map((item, index) => (
        <div className="gallery__card" key={item.id} onClick={() => openSlideshow(item.id)}>
          <img className="gallery__card-img" src={process.env.PUBLIC_URL + `/photoGallery/${item.cover}`} alt={item.description} />
          <div className="gallery__card-content">
            <p>{item.description}</p>
            <p>Lieu : {item.lieu}</p>
          </div>
        </div>
      ))}

      {selectedItem !== null && (
        <div className="slideshow-overlay">
          <button className="close-button" onClick={closeSlideshow}>
            <span>&times;</span>
          </button>
          <div className='carousel-container'>
            <Carousel showThumbs={false} selectedItem={selectedItem}>
              {galleryData[selectedItem].img.map((imageName, index) => (
                <div className="test" key={index}>
                  <img src={process.env.PUBLIC_URL + `/photoGallery/${imageName}`} alt={galleryData[selectedItem].description} />
                  <p>{galleryData[selectedItem].description}</p>
                  <p>{galleryData[selectedItem].lieu}</p>
                </div>
              ))}
            </Carousel>
                <div className='carousel-arrow-container'>
            {/* Flèche gauche */}
            <button
              className="carousel-arrow"
              onClick={goToPreviousSlide}
            >
              <span>&lt;</span>
            </button>

            {/* Flèche droite */}
            <button
              className="carousel-arrow"
              onClick={goToNextSlide}
            >
              <span>&gt;</span>
            </button>
            </div>
          </div>
          </div>
      )}
    </div>
  );
}

export default Gallery;
