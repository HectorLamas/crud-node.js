const express = require('express'); 
const router =  express.Router(); 

// Este controlador va a tener varias funciones que van a responder a las rutas 
const controller = require('../controllers/categorias.controller'); 

// La función controller.index es la que responderá cuando vaya a la ruta principal de categorías
router.get('/create', controller.create); 
router.post('/', controller.store); 
router.get('/', controller.index); // La función controller.index) es la que responderá cuando vaya a '/'
router.get('/:id', controller.show); 
router.get('/:id/edit', controller.edit);   
// Los métodos para editar: patch (una partecita) y put (para modificar todo el registro)
// Nosotros aquí estamos modificando todo el registro. 
// Si no se tiene módulo method-override o no se quiere utilizar, una alterntiva es usar el método 'post'.
router.put('/:id', controller.update); // Se pasa el id de la categoría que quiero modificar 
router.delete('/:id', controller.destroy); 

module.exports = router; 