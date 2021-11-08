const { default: axios } = require('axios');
const { Router } = require('express');
// const { is } = require('sequelize/types/lib/operators');
const { Recipe, } = require('../db')
const router = Router();
const { getAllRecipes, getApiInfo, getDbInfo } = require('./Info/recipeInfo')
const { API_KEY } = process.env



router.get('/', async (req, res,) => {
    const name = req.query.name;
    let recipesAll = await getAllRecipes();
    if (name) {
        let recipesName = await recipesAll.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        recipesName.length ?
            res.status(200).send(recipesName) :
            res.status(404).send("No esta la receta, sorry")
    } else {
        res.status(200).send(recipesAll)
    }

})


router.get('/getId/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        let recipes
        if (id.length > 8) {
            recipes = await recipes.findByPk(id)
            res.send(recipes)
        } else {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
            let recipe = response.data
            const recipesId = {
                id: recipe.id,
                name: recipe.title,
                diet: recipe.diets,
                image: recipe.image,
                diet: recipe.diet,
                summary: recipe.summary,
                spoonacularScore: recipe.spoonacularScore,
                healthScore: recipe.healthScore,

            }
            res.send(recipesId)
        }

    } catch (error) { next(error) }
})





router.post('/', async (req, res, next) => {

    try {
        const { id, name, image, dish } = req.body;
        await Recipe.create({
            id,
            name,
            image,
            dish,
        })
            .then((response) => {
                {
                    return res.send(response)
                }
            })
        // console.log(newRecipe)
        // res.send(newRecipe)

    } catch (err) {
        console.log(err)
    }
})


module.exports = router;
