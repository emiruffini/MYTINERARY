const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    name: {type:String, required:true},
    photoName:{type:String, required:true},
    itineraryId:{type:mongoose.Schema.Types.ObjectId, ref: 'itinerary', required: true}
})

const Activity = mongoose.model('activity',activitySchema)

module.exports = Activity