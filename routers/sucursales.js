//Inicializo codigo
const express =require("express");
const router =express.Router();
const sucursalesControllers = require("../controllers/sucursalesControllers");

//Rutas
router.get("/",sucursalesControllers.bienvenida);
router.get("/:id",sucursalesControllers.sucursales);

//Module
module.exports = router;