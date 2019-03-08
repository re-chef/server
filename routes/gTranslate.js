const router = require('express').Router()
const gTranslateController = require('../controller/gTranslateController')

router.post('/', gTranslateController.getTranslate)

module.exports = router