const mongoose = require('mongoose')

const ciudadSchema = new mongoose.Schema({
    name: {type:String, required:true},
    country: {type:String, required:true}
})

const City = mongoose.model('city',ciudadSchema)

module.exports = City