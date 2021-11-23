const mongoose = require('../db/connections')

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

module.exports = userSchema