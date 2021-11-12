const { default: axios } = require('axios');
const { Router } = require('express');
// const { is } = require('sequelize/types/lib/operators');
const { Recipe, RecipeDiets } = require('../db')
const router = Router();
const { getAllRecipes, getApiInfo, getDbInfo } = require('./Info/recipeInfo')
const { API_KEY } = process.env



router.get('/', async (req, res,) => {
    const name = req.query.name;
    let recipesAll = await getAllRecipes();
    if (name) {
        let recipesName = recipesAll.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
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
            recipes = await Recipe.findByPk(id)
            console.log(recipes)
            res.send(recipes)
        } else {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
            let recipe = response.data
            const recipesId = {
                id: recipe.id,
                name: recipe.title,
                diets: recipe.diets,
                image: recipe.image,
                summary: recipe.summary,
                spoonacularScore: recipe.spoonacularScore,
                healthScore: recipe.healthScore,

                analyzedInstructions: recipe.analyzedInstructions.map((r) => r.steps.map((s) => s.step)).flat(1).join("")
            }
            res.send(recipesId)
        }

    } catch (error) { next(error) }
})





router.post('/', async (req, res, next) => {

    try {
        const { name, image, diets, summary, analyzedInstructions, healthScore, spoonacularScore, createdInDb } = req.body;
        console.log(req.body)
        const recipesCreates = await Recipe.create({
            name,
            summary,
            analyzedInstructions,
            image,
            healthScore,
            spoonacularScore,
            diets,
            createdInDb
        })
        console.log(recipesCreates + "soy dieta de post")
        return res.send(recipesCreates.diets)

    } catch (err) {
        console.log(err)
    }
})


module.exports = router;
