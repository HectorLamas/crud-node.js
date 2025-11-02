const express = require('express'); 
const router =  express.Router(); 

const controller = require('../controllers/main.controller'); 

router.get('/', controller.index)

// Sólo lo que yo exponga del módulo es público. 
// El resto es privado del módulo. 
module.exports = router; 