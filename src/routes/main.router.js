const express = require('express'); 
const router =  express.Router(); 

router.get('/', (req, res)=>{
    res.send("Hola Mundo!!! *(con Router)"); 
})

// Sólo lo que yo exponga del módulo es público. 
// El resto es privado del módulo. 
module.exports = router; 