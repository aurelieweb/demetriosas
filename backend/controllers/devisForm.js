const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Utilisation de la variable d'environnement
      pass: process.env.GMAIL_PASS // Utilisation de la variable d'environnement
    }
});

const devisCtrl = (req, res) => {
    // Ajoutez cette ligne au début de votre contrôleur
    const { nom, email, message } = req.body;
  
    // Utilisez ces variables pour construire l'e-mail
    const mailOptions = {
      from: process.env.GMAIL_USER, // Utilisation de la variable d'environnement
      to: 'contact@demetrio.fr',
      subject: 'Demande de devis',
      text: `Nom : ${nom}\nEmail : ${email}\nMessage : ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
        res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
      } else {
        console.log('E-mail envoyé :', info.response);
        res.status(200).send('E-mail envoyé avec succès');
      }
    });
  };