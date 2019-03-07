const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = 3000
const cors = require('cors')
const mongoose = require('mongoose')
const axios = require('axios')
const { OAuth2Client } = require('google-auth-library')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/Re-chef', {useNewUrlParser: true});

app.listen(port, function(){
    console.log('listen to port', port);
})