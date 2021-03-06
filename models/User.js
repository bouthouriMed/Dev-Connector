const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});

module.exports  = mongoose.model('user',userSchema)