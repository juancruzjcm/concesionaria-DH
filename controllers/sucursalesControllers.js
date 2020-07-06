//Incializo el codigo
const fs = require("fs");
const express = require("express");
const leerJson = JSON.parse(fs.readFileSync("./data/concesionarias.json"));

//Creo variable con objeto literal
const sucursal={
    bienvenida:(req,res)=>{
        res.set({"content-type":"text/plain;charset=utf-8"});
        res.write(`     SUCURSALES Y DIRECCIONES`);
        res.write("\n\n");
        
        //Hago un forEach sonbre leerJson
        leerJson.forEach(call =>{
            res.write(`
            Sucursal ${call.sucursal}
            Direccion ${call.direccion}
            `)
        })
        res.end();        
    },

    sucursales:(req,res)=>{
        res.set({"content-type":"text/plain;utf-8"});
        //variable id 
        let id=req.params.id;
        leerJson.forEach(call =>{

            if(call.sucursal == id){

                res.write(`     SUCURSAL: " + ${call.sucursal}
                                TELEFONO: ${call.telefono}
                `);
                res.write("\n\n");
                res.write("=============================== \n")
                res.write("\n\n");
                
                //Hago un forEach para listar autos
                res.write("Autos disponibles:");
                res.write("\n\n");
                call.autos.forEach(call =>{
                    res.write(`
                    ----------------------
                    MARCA: ${call.marca} \n
                    ----------------------
                    MODELO: ${call.modelo} \n
                    ----------------------
                    AÑO: ${call.anio} \n
                    ----------------------
                    COLOR: ${call.color} \n
                    ----------------------
                    `)
                    res.write("\n\n");
                });
                //Contador de autos
                res.write("Cantidad de autos: " + call.autos.length);
                res.end();
            } else{
                
                res.write(id + "NO TENEMOS SUCURSALE EN ESA DIRECCION!")
            }               
        })
        res.end("Error 404")        
    },              
}
module.exports = sucursal;

