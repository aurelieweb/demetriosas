import React from 'react';
import ImgGallery from '../../assets/test.jpeg';

import '../../styles/styles.scss';

function Gallery () {

  return (
    <div className='gallery'>
      <div className="gallery__card">
        <img className="gallery__card-img" src={ImgGallery} alt="test" />
        <div className="gallery__card-content">
          <p>Description de l'image</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
