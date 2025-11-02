
// Este módulo está incluido en node 
const queryString = require('querystring'); 

const index = (req, res) => {
    const query = queryString.stringify(req.query); 

    fetch('https://fakestoreapi.com/products/?' + query)
        .then(response => response.json())
        .then(prods => res.send(prods));
}; 

const show1product = (req, res) => {
    fetch('https://fakestoreapi.com/products/' + req.params.id)
        .then(response => response.json())
        .then(prod => res.send(prod));
}; 

module.exports = {
    index : index,
    show1product: show1product,
}