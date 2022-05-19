const mongoose = require('mongoose')

// Create Schema
const acSchema = new mongoose.Schema({
    val: {
        type: String,
        required: true
    },
    num: {
        type: Number,
        required: true,
        default: 1
    }
})

module.exports = mongoose.model('acMod', acSchema)