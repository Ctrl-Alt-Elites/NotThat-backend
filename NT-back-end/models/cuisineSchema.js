const mongoose = require('../db/connections')

const cuisineSchema = mongoose.Schema({
    name: String
})

module.exports = cuisineSchema