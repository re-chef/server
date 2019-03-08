const router = require('express').Router()
const controller = require('../controllers/recipeController')

// search recipes
router.get('/search', controller.getRecipes)

// get recipe
router.get('/recipe/:id', controller.recipes)



module.exports = router