// Este módulo está incluido en node 
const queryString = require('querystring'); 
const model = require('../models/Product'); 

const create = (req, res) => {
    res.render('productos/create') // muestra el formulario 'create'
}

const store = async (req, res) => {
    //console.log(req.body); 
    const {name} = req.body; 

    try {
        const result = await model.store(name); 
        console.log(result); 
        res.redirect('/productos'); 
    } catch (error) {
        console.error(error); 
        return res.status(500).send('Internal server error (store)'); 
    }
}

const index = async (req, res) => {
    try {
        const prods = await model.findAll(); 
        res.render('productos/index', {productos: prods}); 

    } catch (error) {
        console.error(error); 
        return res.status(500).send('Internal server error (index)'); 
    }
}; 

const show1product = async (req, res) => {
    const {id} = req.params; 
    try {
        const producto = await model.findById(id); 
        console.log(producto); 
        if (!producto) {  // Esto es, producto == undefined 
            return res.status(404).send("Producto no encontrado.")
        }
        res.render('productos/show', { producto }); 
    } catch (error) {
        console.error(error); 
        return res.status(500).send('Internal server error (show1)');         
    }
}; 


const edit = async (req, res) => {
    const {id} = req.params; 
    try {
        const prod = await model.findById(id); 
        console.log(prod); 
        if (!prod) {  // Esto es, producto == undefined 
            return res.status(404).send("Producto no encontrado.")
        }
        res.render('productos/edit', { prod }); 
    } catch (error) {
        console.error(error); 
        return res.status(500).send('Internal server error (edit)');         
    } 
}; 

const update = async (req, res) => {
    const {id} = req.params; 
    const {inputNombreProducto} = req.body; 
    const name = inputNombreProducto; 

    try {
        const result = await model.update(id, name); 
        console.log(result); 
        res.redirect("/productos")
    } catch (error) {
        console.error(error); 
        return res.status(500).send('Internal server error (update)');         
    }
}

const destroy = async (req, res) => {
    const {id} = req.params; 

    try {
        const result = await model.destroy(id); 
        console.log(result); 
        res.redirect('/productos'); 

    } catch (error) {
        console.log(error); 
        return res.status(500).send('Internal server error (destroy)'); 
    }

}

module.exports = {
    create, 
    store, 
    index : index,
    show1product: show1product,
    edit,
    update,
    destroy,
}

