// const { Diets } = require;
const { Recipe, Diet } = require('../../db')
// const { Router } = require('express');

//Mi función para las dietas
// var loadDiets = [
//     "Gluten Free", "Ketogenic",
//     "Vegetarian", "Lacto-Vegetarian",
//     "Ovo-Vegetarian", "Vegan",
//     "Pescetarian", "Paleo",
//     "Primal", "Whole 30",
// ];
const getDiets = async (req, res, next) => {
    try {
        const dbInfo = await Diet.findAll()
        if (dbInfo.length)
            return res.status(200).json(dbInfo.map(el => el.name))
        else {
            return res.status(400).json({ message: "No se pudo procesar su solicitud" })
        }
    } catch {
        return res.status(400).json({ message: "Error" })
    }
}

module.exports = {
    getDiets
}