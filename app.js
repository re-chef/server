const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = Number(process.env.PORT)
const cors = require('cors')
const mongoose = require('mongoose')
const axios = require('axios')
const { OAuth2Client } = require('google-auth-library')
const gTranslateRoutes = require('./routes/gTranslate')
const youtubeRoutes = require('./routes/youtube.js')
require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', gTranslateRoutes)
app.use('/video', youtubeRoutes)
app.use('/recipes', recipes)


mongoose.connect('mongodb://localhost:27017/Re-chef', {useNewUrlParser: true});

app.listen(port, function(){
    console.log('listen to port', port);
})