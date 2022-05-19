const express = require('express')
const router = express.Router()
const acMod = require('./../model/acMod')

router.get('/', (req, res) => {
    res.render('ac')
})

// router.post('/', (req, res) => {
//     let ac = new acMod({
//         val: req.body.val,
//         num: req.body.num
//     })
//     try {
//         ac = ac.save()
//         max = req.body.num
//         res.render('acc', {max: max})
//     }
//     catch (err) {
//         console.log(err)
//     }
// })



module.exports = router