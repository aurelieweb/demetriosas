import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import NotreSavoirFaire from './pages/NotreSavoirFaire';
import PompeAChaleur from './pages/PompeAChaleur';
import NosRealisations from './pages/NosRealisations';
import DevisEnLigne from './pages/DevisEnLigne';
import Contact from './pages/Contact';
import Plomberie from './pages/Plomberie';
import Error from './components/ErrorPage';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route de la page d'accueil */}
          <Route path="/" element={<Accueil />} />

          {/* Route de la page Notre Savoir-faire */}
          <Route path="/notre-savoir-faire" element={<NotreSavoirFaire className="notre-savoir-faire-page" />} />

          {/* Route de la page Contact */}
          <Route path="/pompes-a-chaleur" element={<PompeAChaleur className="pac-page" />} />

          {/* Route de la page Plomberie */}
          <Route path="/plomberie" element={<Plomberie className="plomberie-page" />} />

          {/* Route de la page Nos Prestations */}
          <Route path="/nos-realisations" element={<NosRealisations className="nos-realisations-page" />} />

          {/* Route de la page Devis en ligne */}
          <Route path="/devis-en-ligne" element={<DevisEnLigne className="devis-en-ligne-page" />} />

          {/* Route de la page Contact */}
          <Route path="/contact" element={<Contact className="contact-page" />} />

          {/* Route par défaut pour la page d'erreur */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;