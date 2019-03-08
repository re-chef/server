const router = require('express').Router()
const userController = require('../controller/userController')

router.post('/googleSignIn', userController.login)

module.exports = router