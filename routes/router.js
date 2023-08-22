"use strict";
//RUTAS
var  LoginController = require("../controllers/login_controller.js"),
UsuarioController = require("../controllers/usuario-controller.js"),

express = require("express"),
  router = express.Router();

router
  //****USUARIO****
  .post("/usuario/autenticar", LoginController.login)
  //Lista Usuario
  .get("/usuario/getall",UsuarioController.getAll)
  .post("/usuario/insertar/:codigo_usuario", UsuarioController.post)

module.exports = router;
