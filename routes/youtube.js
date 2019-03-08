const router = require('express').Router()
const youtubeController = require('../controller/youtubeController')

router.post('/', youtubeController.getVideo)

module.exports = router