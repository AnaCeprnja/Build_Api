const mongoose = require('mongoose');

const ApiSchema = mongoose.Schema({
    title: String,
    description: String,

});

module.exports = mongoose.model('Apis', ApiSchema);