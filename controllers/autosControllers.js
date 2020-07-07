const fs=require("fs");
const leerJson=JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"));

//crar variablel con objeto literal
const automoviles ={
    autos:(req,res)=>{

        let auto=[]
        res.set({"content-tyupe":"text/plain;charset=utf-8"});        
        res.write("NUESTROS AUTOS:");
        res.write("\n\n");

        //Listar autos
        
        leerJson.forEach(call =>{
            call.autos.forEach(call=>{
                auto.push(call);
            })
        })

        auto.forEach(call =>{
            res.write(`
            =============================
            MARCA:  ${call.marca} \n
            =============================
            MODELO: ${call.modelo} \n
            =============================
            AÑO:    ${call.anio} \n
            =============================
            COLOR:  ${call.color}\n
            =============================
            `)
        })
    },
    
    
}
module.exports=automoviles;