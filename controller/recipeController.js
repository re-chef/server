// const model = require('../models/user')
const axios = require('axios')
const ENV = require('dotenv')
ENV.config()

const axi = axios.create({
    baseURL: 'https://www.food2fork.com'
})

class RecipeController {
    // search recipes
    static getRecipes(req, res) {
        axi
            .get(`/api/search?key=${process.env.F2F}&q=${req.query.recipes}`)
            .then(function({ data }) {
                res.status(200).json(data)
            })
            .catch(function(e) {
                res.status(500).json({
                    error: e.message
                })
            })
    }

    static recipes(req, res) {
        axi
            .get(`/api/get?key=${process.env.F2F}&rId=${req.params.id}`)
            .then(function({ data }) {
                res.status(200).json(data)
            })
            .catch(function(e) {
                res.send(500).json({
                    error: e.message
                })
            })
    }
}

module.exports = RecipeController