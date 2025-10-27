require('dotenv').config();

const express = require('express'); 
const app = express(); 

const PORT = process.env.PORT || 3003; 

app.get('/', (req, res)=>{
    res.send("Hola Mundo!***")
})

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})