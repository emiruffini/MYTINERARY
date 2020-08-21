const mongoose = require('mongoose')

const ciudadSchema = new mongoose.Schema({
    nombre: {type:String, required:true},
    pais: {type:String, required:true},
    imagen: {type:String, required:true}
})

const Ciudad = mongoose.model('ciudad',ciudadSchema)

module.exports = Ciudad