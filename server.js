const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

const restaurantController = require('./controllers/restaurantController')

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/restaurants', restaurantController)

app.listen('4001' , () => {
    console.log('connected to port 4001')
})