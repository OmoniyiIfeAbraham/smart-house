// Register routes
const express = require('express')
const router = express.Router()
const registerMod = require('./../model/registerMod')

router.get('/', (req, res) => {
    res.render('index', { msg: "" })
})

var session

router.post('/', (req, res) => {
    var email = req.body.email
    var houseId = req.body.houseId
    session = req.session
    if (email == "" || houseId == ""){
        res.render('index', { msg: "Please Enter all required details" })
    } else {
        registerMod.findOne({ email: email, houseId: houseId }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                if (data) {
                    var Email = req.body.email
                    session.userString = Email
                    res.redirect(`profile/${Email}`)
                    console.log(Email)
                    console.log(session)
                } else {
                    res.render('index', { msg: 'Incorrect Email or House ID!!!' })
                }
            }
        })
    }
})

module.exports = router