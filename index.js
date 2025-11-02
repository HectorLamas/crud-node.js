require('dotenv').config();

const express = require('express'); 
const app = express(); 

const PORT = process.env.PORT|| 3003; 

const mainRouter = require('./src/routes/main.router'); 
app.use(mainRouter)

app.use('/productos', require('./src/routes/productos.router')); // Equivalente a las dos líneas anteriores 

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})

