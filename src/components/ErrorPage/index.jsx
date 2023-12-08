import React from 'react';
import '../../styles/styles.scss';
import imgError from '../../assets/imgError.png';



function Maintenance() {
  return (
    <div className='maintenance__div'>
      <img className="maintenance__div-img" src={imgError} alt="Page en cours de maintenance" />
    </div>
  );
}

export default Maintenance;