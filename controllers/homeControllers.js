//leer JSON y parsearlo
const fs = require ("fs");
const leeJson=JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"));
let home ={
    
    index:(req,res)=>{
        //Mensaje de bienvenida
        res.set({"content-type":"text/plain;charset=utf-8"});
        res.write("Bienvenidos a la concesionara de DH");
        res.write("\n\n");
        //Lista de sucursales
        res.write("Sucursales: \n\n");
        leeJson.forEach((i)=>{
            res.write(i.sucursal + "\n")
        })
        res.end();
    }
}
module.exports = home;