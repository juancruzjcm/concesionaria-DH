//Ejecutar express
const express = require('express');
const app = express();

//Rutear
const routerAutos = require("./routers/autos");
const routerHome = require("./routers/home");
const routerMarcas = require("./routers/marcas");
const routerSucursales = require("./routers/sucursales");

//Levantar servidor 3030
app.listen(3000,()=>console.log("Server running in 3000 port"));

app.use("/autos", routerAutos);
app.use("/", routerHome);
app.use("/home",routerHome);
app.use("/marcas",routerMarcas);
app.use("/sucursales",routerSucursales);