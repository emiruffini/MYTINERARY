const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    hashtag:{type: Array, default: ["Mytinerary", "Travel", "Discover"]},
    title:{type: String, required: true},
    porfilePic:{type: String, required: true},
    rating:{type:Number, default: 0},
    duration:{type:Number, required: true},
    price:{type:Number, required: true},
    cityId:{type:mongoose.Schema.Types.ObjectId, ref: 'city', required: true}   
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports= Itinerary