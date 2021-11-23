const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

const restaurantController = require('./controllers/restaurantController')
const userController = require('./controllers/userController')

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/restaurants', restaurantController)
app.use('/users', userController)

app.listen('4000' , () => {
    console.log('connected to port 4000')
})