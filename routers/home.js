//Requerir express 
const express =require("express");
const router = express.Router();
let homeController = require("../controllers/homeControllers");

//Router
router.get("/",homeController.index);
//Exportar
module.exports = router;