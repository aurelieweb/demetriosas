const express = require('express');
const router = express.Router();

// import middleware, controllers si besoin
const sendDevis = require('../middleware/devisForm')

const devisCtrl = require('../controllers/devisForm')

router.post('/', sendDevis, devisCtrl);

  
  module.exports = router;