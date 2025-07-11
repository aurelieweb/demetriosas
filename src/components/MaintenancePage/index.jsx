import React from 'react';
import '../../styles/styles.scss';
import imgMaintenance from '../../assets/imgMaintenance.png';



function Maintenance() {
  return (
    <div className='maintenance__div'>
      <img className="maintenance__div-img" src={imgMaintenance} alt="Page en cours de maintenance" />
      <div className='maintenance__div-text'>
        <p className='maintenance__div-title'>Page en construction</p>
        <p className='maintenance__div-subtitle'>En attendant, certaines sections sont déjà disponibles !</p>
      </div>
    </div>
  );
}

export default Maintenance;