const axios = require('axios')

class Controller {
    static find(req, res) {
        let querySearch = `q=${req.query.search}&type=video`
        
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&${querySearch}&key=${process.env.SECRET_API}`)
            .then(response => {
                // console.log(response.data,"===data ");
                
                res.status(200).json({ data: response.data })
            })
            .catch(err => {
                // console.log(err, "===ERROR");
                
                res.status(500).json(err)
            })

    }
}

module.exports = Controller