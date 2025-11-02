require('dotenv').config();

const express = require('express'); 
const app = express(); 
const path = require("path"); 

const PORT = process.env.PORT|| 3003; 

// Siempre que podamos usamos rutas absolutas 
app.use(express.static( path.join(__dirname, "public") )); // Aquí le pasamos la ruta donde van a estar los archivos públicos.

app.set('view engine', 'ejs');  // usar ejs como motor para hacer un render 
app.set('views', path.join(__dirname, 'src/views')); //busca en esta carpeta las vistas que va a renderizar


const mainRouter = require('./src/routes/main.router'); 
app.use(mainRouter)

app.use('/productos', require('./src/routes/productos.router')); // Equivalente a las dos líneas anteriores 

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})

