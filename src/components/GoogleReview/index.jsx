import React from 'react';

function GoogleReview() {
  return (
    <div className="google-review">
      <h3>Avis Google</h3>
      {/* Intégrez ici le code d'intégration de l'avis Google, généralement fourni par Google */}
      <iframe
        title="Avis Google"
        width="300"
        height="150"
        src=""
        frameBorder="0"
        allowFullScreen
    ></iframe>
      
    </div>
  );
}

export default GoogleReview;
