const express = require('express'); 
const router = express.Router(); 

const controller = require('../controllers/productos.controller'); 

router.get('/', controller.index);
router.get('/:id', controller.show1product);

module.exports = router; 
