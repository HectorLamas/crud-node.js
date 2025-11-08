// Este módulo se va a encargar de conectarnos a la base de datos.
// Crear el archivo de la base de datos. 

const path = require('path'); 
const sqlite = require('sqlite3'); 

const db = new sqlite.Database(
    path.resolve(__dirname, '../../thedatabase.db'),
        (error) => {
            if (error) {
                return console.error(error); 
            }

            const sql = `CREATE TABLE IF NOT EXISTS categorias (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                name VARCHAR(100) NOT NULL
                )`; 
        
        /* db.run(`DROP TABLE categorias`, (error) => {
            if (error) {
                return console.error(error); 
            }
        }); */

        db.run(sql, (error) => {
            if (error) {
                return console.error(error); 
            }
        });
    }
); 

// db será la conexión hacia la base de datos 
module.exports = db; 
