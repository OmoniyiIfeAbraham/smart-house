// Required modules
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const cookieParser = require("cookie-parser");

const registerRouter = require('./Routes/register')
const loginRouter = require('./Routes/login')
const profileRouter = require('./Routes/profile')
const updateRouter = require('./Routes/update')
const doorRouter = require('./Routes/door')
const acRouter = require('./Routes/ac')
const heaterRouter = require('./Routes/heater')
const lightRouter = require('./Routes/light')

const PORT = process.env.PORT || 4000

// Connect to Database
mongoose.connect('mongodb://localhost/smart', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    if (res) {
        console.log('Database Succesfully Connected')
        app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`))
    }
}).catch((err) => {
    console.log(err)
})

// Template engine
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

// Route for index
app.get('^/$|index', (req, res) => {
    res.render('index', { msg: "" })
})

const oneDay = 1000 * 60 * 60 * 24;
app.use(express.static('public'))
app.use(session({
    secret: 'secret-key',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: true
}))
app.use(cookieParser());
app.use('/register', registerRouter)
app.use('/', loginRouter)
app.use('/profile', profileRouter)
app.use('/update', updateRouter)
app.use('/door', doorRouter)
app.use('/ac', acRouter)
app.use('/heater', heaterRouter)
app.use('/light', lightRouter)