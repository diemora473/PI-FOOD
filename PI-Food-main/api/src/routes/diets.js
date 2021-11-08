// const { default: axios } = require('axios');
const { Router } = require('express');
// const { is } = require('sequelize/types/lib/operators');
const { Diets, } = require('../db')
// const { getAllRecipes, getApiInfo, getDbInfo } = require('./Info/recipeInfo')
// const { API_KEY } = process.env
const router = Router();
// const { getAllDiet } = require('./Info/dietsInfo');


// router.get("/", getAllDiet);

// router.get("/", getDiets);

const typesDiet = [
    "Gruten Free",
    "Lacto Vegetarian",
    "Ovo Vegetarian",
    "Vegan",
    "Primal",
    "Pescetarian",
    "Low FODMAP",
    "Ketogenic",
    "Whole30",
    "vegetarian",
    "Paleo",
]

router.get('/types', async (req, res, next) => {
    const typesApi = typesDiet
    typesApi.forEach(el => {
        Diets.findOrCreate({
            where: {
                name: el
            }
        })
    })
    const allDiets = await Diets.findAll()
    res.send(allDiets)
})


module.exports = router;
