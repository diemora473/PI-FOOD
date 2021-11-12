const axios = require('axios')
const { API_KEY } = process.env
const { Recipe, Diet } = require('../../db')

const getApiInfo = async () => {

    try {

        const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        console.log(apiUrl.length)
        const apiInfo = apiUrl.data.results.map(Recipe => {

            return {
                id: Recipe.id,
                name: Recipe.title,
                diet: Recipe.diets,
                image: Recipe.image,
                // diet: Recipe.diet,
                summary: Recipe.summary,
                spoonacularScore: Recipe.spoonacularScore,
                healthScore: Recipe.healthScore,
                analyzedInstructions: Recipe.analyzedInstructions

                //  analyzedInstructions: Recipe.analyzedInstructions[0]
            }
        })
        console.log(apiInfo.length)
        return apiInfo
    } catch (err) {
        console.log(err)
    }
}
const getDbInfo = async () => {
    console.log(Diet)
    return await Recipe.findAll({
        include:
            Diet,
        through: { attributes: [] }

    })

}
const getAllRecipes = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    console.log(dbInfo + 'hola')
    let infoTotal = [...apiInfo, ...dbInfo]
    return infoTotal
}

module.exports = {
    getApiInfo,
    getDbInfo,
    getAllRecipes
}