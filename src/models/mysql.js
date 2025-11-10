const mysql = require('mysql2/promise'); // Nos permite trabajar con promesas, manera más práctica que con callbaks.

const pool = mysql.createPool({
    // host: 'localhost', // cuando el host es la máquina local 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, 
    database: process.env.DB_NAME,

}); 

module.exports = pool; 