/** Hay muchas formas de crear controladores. 
 * Una es crear funciones y exponerlas con module.exports 
 * 
 * Los controladores de usan para ir modularizando e ir 
 * haciendo la lógica más simple poniendola en módulos. 
 */
const path = require("path"); 

const index = (req, res)=>{
    // Para enviar texto estático: 
    // res.send("Hola Mundo!!! *(con Router)"); 
    
    // Para enviar archivo html 
    // res.sendFile(path.resolve(__dirname, "../../private/index.html") ); 
    res.render("index") // renderizar vista 'index'
}

const private = (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../../private/index.html") ); 
}

module.exports = {
    index,
    private,
}