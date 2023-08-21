"use strict";
//RUTAS
var  LoginController = require("../controllers/login_controller.js"),
express = require("express"),
  router = express.Router();

router
  //****USUARIO****
  .post("/usuario/autenticar", LoginController.login)


module.exports = router;
