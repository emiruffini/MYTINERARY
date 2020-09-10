const Itinerary = require('../models/itineraryModel')
const City = require('../models/cityModel')
const Comment = require("../models/commentModel")
const User = require('../models/userModel')

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
    },

    getCommentsByItineraryId: async (req, res) =>{
        var itineraryId = req.params.id
        try{
            var comments = await Comment.find({itineraryId})
            res.json({
                success: true,
                response: comments
            })
        }catch{
            res.json({
                success: false,
                response: "Failed to get comments"
            })
        }
    },
    commentItinerary: async (req, res) =>{
      
        var user = req.user.user
        var itineraryId = req.params.id
        var comment = req.body.newComment
        
        const newComment = new Comment({
            itineraryId,
            user,
            comment
        })
        /* console.log(newComment) */
        try{
            await newComment.save()
            res.json({
                success: true, 
                response: "Comment saved"
            })
        
        }catch(error){
            res.json({
                success: false,
                response: error 
            })
        }
    },

    deleteComment: async (req, res) =>{
        var id = req.params.id
        
        try {
            await Comment.findOneAndDelete({_id:id})
            res.json({
                success: true, 
                response: "Comment Deleted"
            })
        }catch{
            res.json({
                success: false, 
                response: "Error deleting comment"
            })
        }
    },

    LikeItineraries: async (req, res) =>{
        var id = req.user._id
        var itineraryId = req.params.id
        try {
            var user = await User.findOne({_id:id})
            if(!user){
                res.json({
                    success: false,
                    response: "User not found"
                })
            }
            var itinerary = await Itinerary.findOne({_id:itineraryId})
            if (!itinerary){
                res.json({
                    success: false,
                    response: "Itinerary not found"
                })
            }
            if (!user.likes.includes(itineraryId)){
                var likes = user.likes
                likes.push(itineraryId)
                var rating = itinerary.rating += 1;
                await User.updateOne({_id:id}, {likes})
                await Itinerary.updateOne({_id:itineraryId}, {rating})
                res.json({
                    success: true,
                    message: "liked",
                    response: rating
                })
            }else{
                var likes = user.likes.filter(itinerary => itinerary != itineraryId) 
                var rating = itinerary.rating <= 0 ? 0 : itinerary.rating - 1
                await User.updateOne({_id:id}, {likes})
                await Itinerary.updateOne({_id:itineraryId}, {rating})
                res.json({
                    success: true,
                    message: "unliked",
                    response: rating
                })
            }   
        }catch(error){
            res.json({
                success: false,
                response: error
            })
        }
    }
    
    


}

module.exports = ItinerariesController