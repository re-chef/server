const router = require('express').Router()
const YoutubeController = require('../controller/YoutubeController')

router.get('/', YoutubeController.find)

module.exports = router