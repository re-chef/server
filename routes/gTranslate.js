const router = require('express').Router()
const gTranslateController = require('../controller/gTranslateController')

router.post('/translate', gTranslateController.getTranslate)

module.exports = router