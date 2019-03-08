const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()
const port = Number(process.env.PORT)
const cors = require('cors')
const mongoose = require('mongoose')
const axios = require('axios')
const { OAuth2Client } = require('google-auth-library')
const gTranslateRoutes = require('./routes/gTranslate')

const youtubeRoutes = require('./routes/YoutubeRoutes')
const userRoutes = require('./routes/userRoutes')
mongoose.connect('mongodb://localhost:27017/Re-chef', { useNewUrlParser: true });

const recipes = require('./routes/recipeRouters')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/translate', gTranslateRoutes)

app.use('/video', youtubeRoutes)
app.use('/recipes', recipes)
app.use('/user', userRoutes)


app.listen(port, function () {
    console.log('listen to port', port);
})