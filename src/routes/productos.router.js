const express = require('express'); 
const router = express.Router(); 

// Este módulo está incluido en node 
const queryString = require('querystring'); 

router.get('/', (req, res) => {
    const query = queryString.stringify(req.query); 

    fetch('https://fakestoreapi.com/products/?' + query)
        .then(response => response.json())
        .then(prods => res.send(prods));
})

router.get('/:id', (req, res) => {
    fetch('https://fakestoreapi.com/products/' + req.params.id)
        .then(response => response.json())
        .then(prod => res.send(prod));
})

module.exports = router; 
