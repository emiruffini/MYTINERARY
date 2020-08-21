const Ciudad = require('../models/cityModel')

const citiesController={
    listarCiudades: async (req, res) => {
        const data = await Ciudad.find()
        res.json({
            success: true,
            response:data})
    },

    cargarCiudades: async (req, res) => {

        var {nombre, pais, imagen} = req.body//destructuring
        const nuevaCiudad = new Ciudad({
            nombre,
            pais,
            imagen
        })
        await nuevaCiudad.save()
        res.json({
            success: true,
            response:"Ciudad Cargada"})
    },

    borrarCiudades: async (req, res) =>{
        var id = req.params.id
        await Ciudad.findOneAndDelete({_id: id})
        res.json({
            success: true,
            response: "Ciudad Borrada"})
    },

    modificarCiudades: async (req, res) => {
        var id= req.params.id
        var {nombre, pais, imagen} = req.body
        
        await Ciudad.findOneAndUpdate(
            {_id:id},
            {nombre, pais, imagen}
        )
        res.json({
            success: true,
            response: "Ciudad Modificada"
        })
    }


}

module.exports = citiesController