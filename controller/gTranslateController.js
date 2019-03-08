require('dotenv').config()
const googleTranslate = require('google-translate')(process.env.GOOGLE_API_ID)
 
// googleTranslate.translate('My name is Brandon', 'id', function(err, translation) {
//     if(err){
//         console.log(err, "==========error========");
        
//     } else {

//         console.log(translation.translatedText);
//     }
//     // =>  Mi nombre es Brandon
//   });



class Controller {
    static getTranslate(req,res) {
        googleTranslate
            .translate(req.body.text, 'id', function(err, translation){
                if(err) {
                    console.log(err);
                    
                    res.status(500).json(err)
                } else {
                    res.status(200).json(translation.translatedText)
                }
            })
    }
}

module.exports = Controller