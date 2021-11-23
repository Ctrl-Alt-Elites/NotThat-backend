const express = require('express')
const router = express.Router()
const User = require("../models/userSchema")

router.post('/', (req, res) => {
    User.create(req.body)
        .then(user => {
            console.log(req.body)
            res.status(201).json(user)
        })
})

router.get('/', (req, res) => {
    console.log(req.body)
    // User.find()
    //     .then(user => res.status(200).json(user))
})

router.delete('/:id', (req, res) => {
    // User.deleteOne({ _id: req.params.id})
    //     .then(() => res.status(204).json(req.body) )
})

router.put('/:id', (req, res) => {
    // User.findByIdAndUpdate({ _id: req.params.id}, req.body, {new: true}).then((user) => {
    //     res.status(200).json(user)
    // })
})

module.exports = router;