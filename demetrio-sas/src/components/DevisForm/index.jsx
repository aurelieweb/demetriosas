import React, { useState } from 'react';

function DevisForm() {
  // État local pour stocker les valeurs des champs du formulaire
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [typeIntervention, setTypeIntervention] = useState('');
  const [message, setMessage] = useState('');
  const [fichiers, setFichiers] = useState([]);
  const [fichierNoms, setFichierNoms] = useState([]);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification que tous les champs sont remplis
    if (!nom || !prenom || !email || !telephone || !typeIntervention || !message) {
      alert('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    // Création d'un objet contenant les données du formulaire
    const formData = {
      nom,
      prenom,
      email,
      telephone,
      typeIntervention,
      message,
      fichiers, // Vous pouvez envoyer le fichier ici
    };



    // Envoi des données à l'adresse e-mail (remplacez ceci par votre logique d'envoi)
    console.log('Données du formulaire :', formData);

    // Réinitialisation des champs du formulaire
    setNom('');
    setPrenom('');
    setEmail('');
    setTelephone('');
    setTypeIntervention('');
    setMessage('');
    setFichiers([]);
    setFichierNoms([]); // Réinitialisation des noms de fichiers
  };


  // Fonction pour gérer le changement de fichiers
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convertit la liste de fichiers en tableau
    setFichiers(selectedFiles);

    // Obtient les noms des fichiers sélectionnés
    const selectedFileNames = selectedFiles.map((file) => file.name);
    setFichierNoms(selectedFileNames);
  };

 // Fonction pour déclencher le téléchargement de fichiers en cliquant sur un bouton personnalisé
 const handleCustomFileUpload = () => {
    const fileInput = document.getElementById('fichiers');
    fileInput.click(); // Cliquez sur l'élément input[type="file"] invisible
  };

  return (
    <div>
      <h1>Devis en Ligne</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="telephone">Numéro de téléphone :</label>
          <input
            type="tel"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="typeIntervention">Type d'intervention :</label>
          <select
            id="typeIntervention"
            value={typeIntervention}
            onChange={(e) => setTypeIntervention(e.target.value)}
            required
          >
            <option value="">Sélectionnez le type d'intervention</option>
            <option value="Dépannage plomberie">Dépannage plomberie</option>
            <option value="Dépannage chauffage">Dépannage chauffage</option>
            <option value="Installation pompe à chaleur">Installation pompe à chaleur</option>
            <option value="Installation sanitaire">Installation sanitaire</option>
            <option value="Intallation chauffage">Installation chauffage</option>
            <option value="Projet de construction neuve">Projet de construction neuve</option>
            <option value="Projet de rénovation">Projet de rénovation</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="button"
            className="custom-file-upload"
            onClick={handleCustomFileUpload}
          >
            Choisir fichier(s)
          </button>
          <input
            type="file"
            id="fichiers"
            onChange={handleFileChange}
            multiple
            style={{ display: 'none' }} // Masquer l'élément input[type="file"]
          />
        </div>
        <div>
          {fichierNoms.length > 0 ? (
            <div>Fichiers joints : {fichierNoms.join(', ')}</div>
          ) : (
            <div>Aucun fichier joint</div>
          )}
        </div>
        <div>
          <button type="submit">Valider</button>
        </div>
      </form>
    </div>
  );
}

export default DevisForm;
