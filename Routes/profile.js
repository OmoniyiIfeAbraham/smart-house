const express = require('express')
const registerMod = require('../model/registerMod')
const router = express.Router()

router.get('/:Email', (req, res) => {
    registerMod.findOne({ email: req.params.Email })
    .then(result => {
        door = result.door
        ac = result.ac
        heater = result.heater
        light = result.light
        curtain = result.curtain
        res.render('profile', { mail: req.params.Email, items: result, door, ac, heater, light, curtain })
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router