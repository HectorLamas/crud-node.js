require('dotenv').config();

const express = require('express'); 
const app = express(); 
const path = require('path'); 
const layouts = require('express-ejs-layouts'); 

const PORT = process.env.PORT|| 3003; 

// Siempre que podamos usamos rutas absolutas 
app.use(express.static( path.join(__dirname, "public") )); // Aquí le pasamos la ruta donde van a estar los archivos públicos.

app.set('view engine', 'ejs');  // usar ejs como motor para hacer un render 
app.set('views', path.join(__dirname, 'src/views')); //busca en esta carpeta las vistas que va a renderizar

app.use(layouts); 
// Va a buscar un archivo llamado 'layout' que es el que va a envolver nuestra vista 
app.set('layout', 'layouts/layout'); 
app.use(express.urlencoded({extended: false})); // Middleware: toma la información de contacto y la proporciona utilizable


const mainRouter = require('./src/routes/main.router'); 
app.use(mainRouter)
app.use('/productos', require('./src/routes/productos.router')); // Equivalente a las dos líneas anteriores
app.use('/contacto', require('./src/routes/contacto.router'));  

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})

