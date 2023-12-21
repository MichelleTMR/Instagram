const mongoose = require('mongoose');

//Schema

const commentSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    timestamp: {
        required: true,
        type: Number
    }
})



const dataSchema = new mongoose.Schema({

    userid: {
        required: true,
        type: String 
    },
    username: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    caption: {
        required: false,
        type: String
    },
    likes: {
        required: true,
        type: [Number]
    },
    timestamp: {
        required: true,
        type: Number
    },
    comments: {
        required: false,
        type: [commentSchema]
    },
})

module.exports = mongoose.model('Data', dataSchema)