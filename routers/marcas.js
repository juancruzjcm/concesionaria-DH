const express = require("express");
const router = express.Router();
const marcasControllers = require("../controllers/marcasControllers");



//Router
router.get("/",marcasControllers.index)
router.get("/:id",marcasControllers.listaDeMarcas);

//Exportar
module.exports=router;