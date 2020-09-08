const Itinerary = require('../models/itineraryModel')
const City = require('../models/cityModel')


const ItinerariesController = {
    getItineraries: async (req, res) =>{
        try{
            const data = await Itinerary.find()
            res.json({
                success: true,
                response: data
            })
        }catch{
            res.json({
                success: false,
                response: "Error loading itineraries"
            })
        }
    },
    loadItineraries: async (req, res) =>{
        var {hashtag, title, porfilePic, rating, duration, price, cityId, comments} = req.body

        const newItinerary = new Itinerary({
            hashtag,
            title,
            porfilePic,
            rating,
            duration,
            price,
            cityId,
            comments,
        })
        try{
            const savedItinerary = await newItinerary.save()
            res.json({
                success: true,
                response: savedItinerary
            })
        }catch{
            res.json({
                success: false,
                response: "Failed to upload itinerary"
            })
        }
    },
    getItinerary: async (req, res) =>{
        var id = req.params.id
        try{
            var itineraries = await Itinerary.find({cityId:id}).populate('cityId')
            if ( itineraries.length === 0 ){
                var city = await City.findOne({_id:id})
            }
            res.json({
                success: true,
                response: itineraries,
                response2:city ? city : null
            })   
        }catch{
            res.json({
                success: false,
                response: "Failed to get Itinerary"
            })
        }
    }


}

module.exports = ItinerariesController