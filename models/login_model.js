
"use strict"

var conn = require('../config/db-connection'), 
UsuarioModel = () => {};

UsuarioModel.login = (codigo_usuario, clave, callback) => {
  
  conn.query('SELECT * FROM usuario WHERE codigo_usuario = $1', [codigo_usuario], (err,result) => {


    if (err) {
      return callback(err, null);
    }

    if (result.rows.length === 0) {
      return callback(null, null);
    }

    var usuario = result.rows[0];
    

    callback(null, usuario);

  });
};


module.exports = UsuarioModel;
