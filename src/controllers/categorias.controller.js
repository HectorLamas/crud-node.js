const fs = require('fs'); // Para trabajar con el sistema de archivos, viene con node
const path = require('path'); // Módulo que nos ayuda a manejar las rutas 

let arrCategorias = [
    /* Este información va a estar en la base de datos 
    * {id: 1, nombre: "Categoría 1"},
    {id: 2, nombre: "Categoría 2"},
    {id: 3, nombre: "Categoría 3"}, */
]; 


const create = (req, res) => {
    res.render("categorias/create"); // Se renderiza esta vista 
}

// Para recibir la información del formulario 'Crear categoría'
const store = (req, res) => {
    const {inputNombreCategoria} = req.body; 
    //console.log(req.body); 
    const cat = {
        id: Date.now(),
        nombre: inputNombreCategoria,
    }; 

    arrCategorias.push(cat); 

    fs.writeFileSync(
        path.resolve(__dirname, "../../file_categorias.json"), 
        JSON.stringify(arrCategorias)
    )
    res.redirect("/categorias");
    
}


// Esta función es para mostrar el listado de las categorías. 
const index = (req, res) => {
    try {
        // Tratar de ejecutar este código. Si no se puede, 
        // por ejemplo, porque no existe el archivo file_categorias.json 
        arrCategorias = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../../file_categorias.json"), "utf-8")
    ); //OK 
    } catch (error) {
        arrCategorias = []; 
    }

    // res.send('Listado de categorías.');
    res.render('categorias/index', {categorias: arrCategorias});
}


// Esta es para mostrar el detalle de las categorías 
const show = (req, res) => {
    /**AQUÍ NO ES EL PROBLEMA */
    arrCategorias = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../../file_categorias.json"), "utf-8")
    );

    const {id} = req.params; 
    const categ = arrCategorias.find(cat => cat.id == id);  
    // console.log(categ); 
    if (!categ){
        return res.status(404).send("No existe la categoría!")
    }; 
    res.render('categorias/show', {categ});
}


const edit = (req, res) => {
    /** AQUÍ NO ES EL PROBLEMA */
    arrCategorias = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../../file_categorias.json"), "utf-8")
    );

    const {id} = req.params; 
    const categ = arrCategorias.find(cat => cat.id == id);
    if (!categ){
        return res.status(404).send("No existe la categoría!")
    }; 
    res.render('categorias/edit', {categ}); 
}


const update = (req, res) => {
    arrCategorias = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../../file_categorias.json"), "utf-8")
    );

    // res.send("UPDATE"); 
    const { id } = req.params; 
    const { inputNombreCategoria } = req.body; 
    const categ = arrCategorias.find(cat => cat.id == id);
    if (!categ){
        return res.status(404).send("No existe la categoría!")
    }; 

    categ.nombre = inputNombreCategoria; 

    fs.writeFileSync(
        path.resolve(__dirname, "../../file_categorias.json"), 
        JSON.stringify(arrCategorias)
    )

    res.redirect("/categorias"); 

}


const destroy = (req, res) => {
    arrCategorias = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../../file_categorias.json"), "utf-8")
    );

    // res.send('DESTROY'); // 'borrar' en lugar de 'destroy'
    const {id} = req.params; 

    const idx = arrCategorias.findIndex(categ => categ.id == id); 
    if (idx == -1) {
        return res.status(404).send("No existe la categoría."); 
    } 

    arrCategorias.splice(idx, 1); // A partir del índice idx borra 1 

    fs.writeFileSync(
        path.resolve(__dirname, "../../file_categorias.json"), 
        JSON.stringify(arrCategorias)
    )
    res.redirect('/categorias'); 
}

module.exports = {
    create,
    store,  
    index, 
    show,
    edit, 
    update, 
    destroy,
}