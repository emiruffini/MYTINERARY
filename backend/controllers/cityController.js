const City = require('../models/cityModel')


const CitiesController={
    //Controlador para obtener ciudades
    getCities: async (req, res) => {
        try{
            const data = await City.find()
            res.json({
                success: true,
                response:data})
        }catch{
            res.json({
                success: false,
                response:"Error loading cities"})
        }
    },
    //Controlador para cargar una ciudad
    loadCities: async (req, res) => {

        var {name, country} = req.body//destructuring
        const newCity = new City({
            name,
            country
        })
        try{
            await newCity.save()
            res.json({
                success: true,
                response:"Ciudad Cargada"})
        }catch{
            res.json({
                success: false,
                response:"Error uploading city"})
        }
        
    },
    //Controlador para borrar una ciudad
    deleteCities: async (req, res) =>{
        var id = req.params.id
        try{
            await City.findOneAndDelete({_id: id})
            res.json({
                success: true,
                response: "Ciudad Borrada"})
        }catch{
            res.json({
                success: false,
                response:"Error deleting city"})
        }
    },
    //Controlador mara modificar una ciudad
    modifyCities: async (req, res) => {
        var id= req.params.id
        var {name, country} = req.body
        
        try{
            await City.findOneAndUpdate(
                {_id:id},
                {name, country}
            )
            res.json({
                success: true,
                response: "Ciudad Modificada"
            })
        }catch{
            res.json({
                success: false,
                response:"Error modifying city"})
        }
    }

}



module.exports = CitiesController