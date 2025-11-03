const express = require('express'); 
const router =  express.Router(); 

const controller = require('../controllers/contacto.controller'); 

router.get('/', controller.index);
router.post('/', controller.enviarFormulario); //al llegar a la ruta /contacto ejecuta enviarFormulario

module.exports = router; 