require('dotenv').config()
const googleTranslate = require('google-translate')(process.env.GOOGLE_API_ID)
 
class Controller {
    static getTranslate(req,res) {
        console.log(req.body.text);
        
        googleTranslate
            .translate(req.body.text, 'id', function(err, translation){
                if(err) {
                    console.log(err);
                    
                    res.status(500).json(err)
                } else {
                    console.log(translation.translatedText);
                    
                    res.status(200).json({data :translation.translatedText})
                }
            })
    }
}

module.exports = Controller