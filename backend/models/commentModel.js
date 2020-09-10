const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    itineraryId: {type: mongoose.Schema.Types.ObjectId, ref:'itinerary'},
    user: {type: String, required: true},
    comment: {type: String, required: true}
});

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment