const Router = require('express');
const dietRoute = require('./diets')
const recipeRoute = require('./recipe')
const router = Router();


router.use('/diets', dietRoute);

router.use('/recipe', recipeRoute);

module.exports = router;
