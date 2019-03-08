const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = 3000
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

// car nampilin videp youtube di iframe lalu diembed
https://www.googleapis.com/youtube/v3/search?part=snippet&q=nasi goreng&key=AIzaSyBuNW11wBhB_wkBEFE6MnSKT_xeWsgpbuM&type=video&maxResult=3`

// var googleTranslate = require('google-translate')(process.env.GOOGLE_API_ID)
 
// googleTranslate.translate('My name is Brandon', 'id', function(err, translation) {
//     if(err){
//         console.log(err, "==========error========");
        
//     } else {

//         console.log(translation.translatedText);
//     }
//     // =>  Mi nombre es Brandon
//   });



// function searchListByKeyword(auth, requestData) {
//     var service = google.youtube('v3');
//     var parameters = removeEmptyParameters(requestData['params']);
//     parameters['auth'] = auth;
//     service.search.list(parameters, function(err, response) {
//       if (err) {
//         console.log('The API returned an error: ' + err);
//         return;
//       }
//       console.log(response);
//     });
//   }
  
//   //See full code sample for authorize() function code.
//   authorize(JSON.parse(content), {'params': {'maxResults': '25',
//                    'part': 'snippet',
//                    'q': 'nasi goreng',
//                    'type': ''}}, searchListByKeyword);





mongoose.connect('mongodb://localhost:27017/Re-chef', {useNewUrlParser: true});

app.listen(port, function(){
    console.log('listen to port', port);
})