// Register routes
const express = require("express");
const registerMod = require("../model/registerMod");
const router = express.Router()

router.get('/', (req, res) => {
    res.render('register', { exists: "" })
})

router.post('/', (req, res) => {
    let reg = new registerMod({
        name: req.body.name,
        email: req.body.email,
        houseId: req.body.houseId,
        door: req.body.door,
        ac: req.body.ac,
        heater: req.body.heater,
        light: req.body.light,
        // curtain: req.body.curtain
    })
    var Email = req.body.email
    registerMod.findOne({ email: Email }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            if (data) {
                var exist = req.body.email
                var Name = req.body.name
                res.render('register', {exists: `This email '${exist}' already Exists`})
            } else {
                try {
                    reg = reg.save()
                    res.redirect(`index`)
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
    })
})

module.exports = router