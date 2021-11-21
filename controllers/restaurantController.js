const express = require('express')
const router = express.Router()
const Restaurant = require("../models/restaurantSchema")

router.post('/', (req, res) => {
    Restaurant.create(req.body)
        .then(restaurant => res.status(201).json(restaurant))
})

router.get('/', (req, res) => {
    Restaurant.find()
        .then(restaurant => res.status(200).json(restaurant))
})

router.delete('/:id', (req, res) => {
    Restaurant.deleteOne({ _id: req.params.id})
        .then(() => res.status(204).json(req.body) )
})

router.put('/:id', (req, res) => {
    Restaurant.findByIdAndUpdate({ _id: req.params.id}, req.body, {new: true}).then((restaurant) => {
        res.status(200).json(restaurant)
    })
})

module.exports = router;