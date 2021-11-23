const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/restaurants', {useNewUrlParser:true})

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/restaurants";
  }



module.exports = mongoose;