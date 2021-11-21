const mongoose = require('../db/connections');
const cuisineSchema = require('./cuisineSchema');

const restaurantSchema = mongoose.Schema ({
    name: String,
    zipcode: String,
    cuisines: [cuisineSchema]
})

module.exports = mongoose.model('Restaurant', restaurantSchema);