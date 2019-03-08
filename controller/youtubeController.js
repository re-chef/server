const axios = require('axios')
const apiKey = process.env.GOOGLE_API_ID
class Controller {
    static getVideo(req,res) {
        axios
            .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=nasi goreng&key=${apiKey}&type=video&maxResult=3`)
            .then(({data})=> {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = Controller


