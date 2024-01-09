import React from 'react';
import '../../styles/styles.scss';
import imgError from '../../assets/imgError.png';



function Error() {
  return (
    <div className='error__div'>
      <img className="error__div-img" src={imgError} alt="Erreur 404" />
    </div>
  );
}

export default Error;