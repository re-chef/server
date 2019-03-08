const axios = require('axios')

class Controller {
    static find(req, res) {
        let querySearch = `q=${req.query.search}&type=video`
        
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&${querySearch}&key=${process.env.SECRET_API}`)
            .then(respone => {
                res.status(200).json({ data: respone.data })
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }
}

module.exports = Controller