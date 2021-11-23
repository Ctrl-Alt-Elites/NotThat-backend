const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/restaurants,users', {useNewUrlParser:true})

mongoose.createConnection('mongodb://localhost/restaurants', {useNewUrlParser:true})
mongoose.createConnection('mongodb://localhost/users', {useNewUrlParser:true})


module.exports = mongoose;