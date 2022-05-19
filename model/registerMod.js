const mongoose = require('mongoose')

// Create Schema
const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    houseId: {
        type: Number,
        required: true
    },
    door: {
        type: String,
    },
    ac: {
        type: String,
    },
    heater: {
        type: String,
    },
    light: {
        type: String,
    },
    // curtain: {
    //     type: String,
    // }
})

module.exports = mongoose.model('registerMod', registerSchema)