const model = require('../models/Category'); 

const create = (req, res) => {
    res.render("categorias/create"); // Se renderiza esta vista 
}

// Recibe store la información que nos envían desde el formulario 'Crear categoría'
const store = (req, res) => {
    // Lo que se envía a través del formulario viene en req.body. 
    // Al enviar formulario, usando el middleware urlencoded se pasa la información al req.body
    // console.log(req.body); 
    const {inputNombreCategoria} = req.body; 
    const name = inputNombreCategoria; 

    model.create(name, (error, id) => {
        if (error){
            // console.error(error); 
            return res.status(500).send("Error 500: Internal server error."); 
        }
        console.log(id); 
        res.redirect('/categorias'); 
    }); 
}


// Esta función es para mostrar el LISTADO de las categorías. 
const index = (req, res) => {
    model.findAll((error, rows)=>{
        if (error){
            return res.status(500).send("Error 500: Internal server error."); 
        }
        res.render('categorias/index', {categorias: rows});
    })
}


// Esta es para mostrar el DETALLE de las categorías 
const show = (req, res) => {
    const {id} = req.params; 
     
    model.findById(id, (error, categ)=> {
        console.error(error); 
        if (error){
            return res.status(500).send("Error 500: Internal server error. (SHOW)"); 
        }        
        console.log(categ);
        if (!categ) {
            return res.status(404).send("No existe la categoría");
        }
        res.render('categorias/show', {categ});
    }); 
}


const edit = (req, res) => {
  const { id } = req.params;

  model.findById(id, (error, categ) => {
    if (error) {
      return res.status(500).send("Internal Server Error");
    }

    if (!categ) {
      return res.status(404).send("No existe la categoría");
    }
    res.render("categorias/edit", { categ });
  });
};


// Se ejecuta al modificar las categorías  
const update = (req, res) => {
  const { id } = req.params;
  const { inputNombreCategoria } = req.body;
  const name = inputNombreCategoria; 

  model.update(id, name, (error, changes) => {
    if (error) {
      return res.status(500).send("Internal Server Error");
    }
    // console.log(changes);
    res.redirect("/categorias");
  });
};


// JSON.parse() se utiliza para convertir una cadena de texto en formato JSON en un objeto JS.
const destroy = (req, res) => {
  const { id } = req.params;

  model.destroy(id, (error, changes) => {
    if (error) {
      return res.status(500).send("Internal Server Error");
    }
    // console.log(changes);
    res.redirect("/categorias");
  });
};


module.exports = {
    create,
    store,  
    index, 
    show,
    edit, 
    update, 
    destroy,
}