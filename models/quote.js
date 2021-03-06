const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
    qquote: {
        type: String,
        required: true
    },
    saidBy: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Quote', quoteSchema)