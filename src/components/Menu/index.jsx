import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Fonction menu
function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="menu">
      <button className="menu__burger" onClick={toggleMenu}>
        ☰
      </button>
      {menuOpen && (
        <button className="close-button" onClick={closeMenu}>
          ✕
        </button>
      )}
      <ul className={`menu__list ${menuOpen ? 'open' : ''}`}>
        <li className="menu__item">
          <Link to="/" className="menu__item-link" onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/notre-savoir-faire" className="menu__item-link" onClick={closeMenu}>
            Notre savoir-faire
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/pompes-a-chaleur" className="menu__item-link" onClick={closeMenu}>
            Pompe à Chaleur
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/nos-realisations" className="menu__item-link" onClick={closeMenu}>
            Nos réalisations
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/devis-en-ligne" className="menu__item-link" onClick={closeMenu}>
            Devis en ligne
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/contact" className="menu__item-link" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
