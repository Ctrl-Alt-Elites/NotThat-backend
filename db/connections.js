const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restaurants', {useNewUrlParser:true})

module.exports = mongoose;