const express=require("express");
const router = require("./home");
const router =express.Router();
const autosControllers = require("../controllers/autosControllers");


//RUTAS
router.get("/",autosControllers);
router.get("/:id",autosControllers);

module.exports = router;