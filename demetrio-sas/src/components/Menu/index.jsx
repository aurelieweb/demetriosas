import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <ul className="menu">
      <li className="menu__item">
        <Link to="/" className="menu__item-link">Accueil</Link>
      </li>
      <li className="menu__item">
        <Link to="/notre-savoir-faire" className="menu__item-link">Notre savoir-faire</Link>
      </li>
      <li className="menu__item">
        <Link to="/nos-prestations" className="menu__item-link">Nos prestations</Link>
      </li>
      <li className="menu__item">
        <Link to="/devis-en-ligne" className="menu__item-link">Devis en ligne</Link>
      </li>
      <li className="menu__item">
        <Link to="/contact" className="menu__item-link">Contact</Link>
      </li>
    </ul>
  );
}

export default Menu;
