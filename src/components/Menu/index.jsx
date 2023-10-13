import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      <button className="menu__burger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu__list ${menuOpen ? 'open' : ''}`}>
        <li className="menu__item">
          <Link to="/" className="menu__item-link">Accueil</Link>
        </li>
        <li className="menu__item">
          <Link to="/notre-savoir-faire" className="menu__item-link">Notre savoir-faire</Link>
        </li>
        <li className="menu__item">
          <Link to="/nos-realisations" className="menu__item-link">Nos réalisations</Link>
        </li>
        <li className="menu__item">
          <Link to="/devis-en-ligne" className="menu__item-link">Devis en ligne</Link>
        </li>
        <li className="menu__item">
          <Link to="/contact" className="menu__item-link">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

