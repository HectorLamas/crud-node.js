const express = require('express'); 
const router =  express.Router(); 

const controller = require('../controllers/categorias.controller'); 

// La función controller.index es la que responderá cuando vaya a la ruta principal de categorías
router.get('/create', controller.create); 
router.post('/', controller.store); 
router.get('/', controller.index); 
router.get('/:id', controller.show); 
router.get('/:id/edit', controller.edit); 
// Los métodos para modificar: patch (una partecita) y put (para modificar todo el registro)
// Nosotros aquí estamos modificando todo el registro. 
router.put('/:id', controller.update); 
router.delete('/:id', controller.destroy); 

module.exports = router; 