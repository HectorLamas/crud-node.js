/** Hay muchas formas de crear controladores. 
 * Una es crear funciones y exponerlas con module.exports 
 * 
 * Los controladores de usan para ir modularizando e ir 
 * haciendo la lógica más simple poniendola en módulos. 
 */

const index = (req, res)=>{
    res.send("Hola Mundo!!! *(con Router)"); 
}

module.exports = {
    index: index,
}