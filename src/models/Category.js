/**Este archivo es el modelo que va a tener todas las funciones 
 * para manejar toda la información HACIA la base de datos.  
 * El controlador no debería manejar la información, en su lugar, 
 * llama al modelo y éste se va a encargar de guardar la información en la bd.
 * // null: no hay error; this se refiere a la función pasada a db.run(sql,[name], function(error){}
 * */

const db = require('./sqlite'); 

const create = (name, callback) => {
    // Si tengo que insertar un dato utilizo (?) eso va a hacer que se limpie la información 
    const sql = `INSERT INTO categorias (name) VALUES (?)`;  

    // "Siempre que queremos insertar datos en la BD hay que limpiarlos antes. "
    db.run(sql, [name], function(error) {
        if (error){
            return callback(error); 
        }
        // null: no hay error; 
        callback(null, this.lastID); 
    });
}; 


// Para buscar información en la base de datos. Esta función se utiliza dentro del listado de categorias.
const findAll = (callback) => {
    const sql = `SELECT * FROM categorias`; 

    db.all(sql, (error, rows)=>{
        if (error){
            return callback(error); 
        }
        callback(null, rows); 
    })
}


// Para buscar un dato 
const findById = (id, callback) => {
  const sql = `SELECT * FROM categorias WHERE id = ?`;

  db.get(sql, [id], (error, row) => {
    if (error) {
      return callback(error);
    }
    callback(null, row);
  });
};


const update = (id, name, callback) => {
    const sql = `UPDATE categorias SET name = ? WHERE id = ?`;
        
    db.run(sql, [name, id], function (error) {
        if (error) {
        return callback(error);
        }
        callback(null, this.changes);
    });
};


const destroy = (id, callback) => {
  const sql = `DELETE FROM categorias WHERE id = ?`;

  db.run(sql, [id], function (error) {
    if (error) {
      return callback(error);
    }

    callback(null, this.changes);
  });
};


module.exports = {
    create,
    findAll,
    findById,
    update, 
    destroy,
}