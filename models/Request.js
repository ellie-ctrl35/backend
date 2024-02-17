const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "Plastic",
        enum: ["Plastic", "Paper", "Glass", "Metal", "Other"]
    },
    status: {
        type: String,
        enum: ["Pending", "completed"],
        default: "Pending"
    },
    lat:{
        type: Number,
        required: true
    },  
    long:{
        type: Number,
        required: true
    },
    TakenBy: {
        type: String,
        default: ""
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
},
{timestamps: true}
);

module.exports = mongoose.model("Request", requestSchema);