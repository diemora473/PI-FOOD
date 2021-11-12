// const { default: axios } = require('axios');
const { Router } = require('express');
// const { is } = require('sequelize/types/lib/operators');
const { Diet, } = require('../db')
// const { getAllRecipes, getApiInfo, getDbInfo } = require('./Info/recipeInfo')
// const { API_KEY } = process.env
const router = Router();
// const { getAllDiet } = require('./Info/dietsInfo');


// router.get("/", getAllDiet);

// router.get("/", getDiets);

const typesDiet = [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "Lacto Vegetarian",
    "Ovo Vegetarian",
    "paleolithic",
    "fodmap friendly",
    "vegan",
    "primal",
    "pescetarian",
    "low FODMAP",
    "ketogenic",
    "whole 30",
    "vegetarian",
    "paleo",
]

router.get('/types', async (req, res, next) => {
    const typesApi = typesDiet
    typesApi.forEach(el => {
        Diet.findOrCreate({
            where: {
                name: el
            }
        })
    })
    const allDiets = await Diet.findAll()
    res.send(allDiets)
})


module.exports = router;
