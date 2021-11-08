// const { Diets } = require;
const { Recipe, Diet } = require('../../db')
const axios = require('axios')
// const { Router } = require('express');

//Mi función para las dietas
// var diets = [

//     { name: "gluten free" },
//     { name: "dairy free" },
//     { name: "lacto ovo vegetarian" },
//     { name: "vegan" },
//     { name: "paleolithic" },
//     { name: "primal" },
//     { name: "pescatarian" },
//     { name: "fodmap friendly" },
//     { name: "whole 30" },
// ];
// async function getAllDiet(req, res, next) {
//     try {
//         const respuesta = await Diet.findAll();
//         if (respuesta.length > 0) return res.json(respuesta);
//         else {
//             try {
//                 const dietDb = await Diet.bulkCreate(diets);
//                 return res.json(dietDb);
//             } catch (err) {
//                 res.send(err);
//             }
//         }
//     } catch (err) {
//         res.send(err);
//     }
// }
module.exports = {
    getAllDiet
}