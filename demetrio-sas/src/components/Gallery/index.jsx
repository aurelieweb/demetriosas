import React from 'react';
import '../../styles/styles.scss';
import galleryData from '../../data/galleryData.json';

function Gallery() {
  return (
    <div className="gallery">
      {galleryData.map((item) => (
        <div className="gallery__card" key={item.id}>
          <img className="gallery__card-img" src={item.img} alt={item.description} />
          <div className="gallery__card-content">
            <p>{item.description}</p>
            <p>Lieu : {item.lieu}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
