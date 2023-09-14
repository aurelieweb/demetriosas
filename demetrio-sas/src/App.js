import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import NotreSavoirFaire from './pages/NotreSavoirFaire';
import NosPrestations from './pages/NosPrestations';
import DevisEnLigne from './pages/DevisEnLigne';
import Contact from './pages/Contact';

/*import Error from './components/Error';*/
/*import './styles/styles.scss';*/

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route de la page d'accueil */}
          <Route path="/" element={<Accueil />} />

          {/* Route de la page Notre Savoir-faire */}
          <Route path="/notre-savoir-faire" element={<NotreSavoirFaire className="notre-savoir-faire-page" />} />

          {/* Route de la page Nos Prestations */}
          <Route path="/nos-Prestations" element={<NosPrestations className="nos-prestations-page" />} />

          {/* Route de la page Devis en ligne */}
          <Route path="/Devis-en-ligne" element={<DevisEnLigne className="devis-en-ligne-page" />} />

          {/* Route de la page Contact */}
          <Route path="/contact" element={<Contact className="contact-page" />} />

          {/* Route par défaut pour la page d'erreur 
          <Route path="*" element={<Error />} />*/}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;