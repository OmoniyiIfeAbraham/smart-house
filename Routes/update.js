const express = require('express')
// const { mongo } = require('mongoose')
const router = express.Router()
const registerMod = require('./../model/registerMod')
const mongo = require('mongodb').MongoClient
// const objectId = require('mongodb').ObjectID

var url = "mongodb://127.0.0.1:27017/"

router.get('/', (req, res) => {
    res.render('updateProfile')
})

router.post('/', (req, res, next) => {
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
    // var Email = req.body.email
    mongo.connect(url, function(err, db){
        if (err) throw err
        var dbo = db.db("smart")
        var query = { email: req.body.email }
        var data = {name: req.body.name,email: req.body.email,houseId: req.body.houseId,door: req.body.door,ac: req.body.ac,heater: req.body.heater,light: req.body.light}
        // console.log(data)
        dbo.collection('registerMod').updateOne(query, data, function(err, collection){
            if (err) {
                console.log(err)
            } else {
                if (collection) {
                    console.log("updated")
                    dbo.close()
                }
            }
        })
    })
    // mongo.connect(url, function(err, db){
    //     // assert.equal(null, err)
    //     db.collection('registerMod').updateOne({"_id": objectId(id)}, {$set: reg} ,function(err, result){
    //         // assert.equal(null, err)
    //         console.log("Item updated")
    //         db.close()
    //     })
    // })
})

module.exports = router