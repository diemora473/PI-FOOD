import axios from "axios";

export function getRecipes() {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/recipe');
            dispatch({
                type: 'GET_RECIPES',
                payload: json.data

            })

        } catch (err) {
            console.log(err)
        }

    }
}

export function addRecipe(recipe) {
    return async function (dispatch) {
        if (!recipe) {
            return dispatch({
                type: "ADD_RECIPE",
                payload: { default: true }
            })
        }
        var res = await axios.post(`http://localhost:3001/recipe`, recipe);
        return dispatch({
            type: "ADD_RECIPE",
            payload: res.data
        })
    }
}
export function getDiets() {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/types`);
        return dispatch({
            type: "GET_DIETS",
            payload: json.data
        })
    }
}
export function postRecipe(payload) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/recipe', payload)
        console.log(response)
        return response
    }
}
export function filterRecipesByStatus(payload) {
    console.log(payload)
    return {
        type: 'FILTER_BY_STATUS',
        payload
    }
}

export function orderMyName(payload) {
    return {
        type: "ORDER_MY_NAME",
        payload
    }
}
export function getNameRecipes(name) {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/recipe?name=' + name);
            dispatch({
                type: 'GET_NAME_RECIPES',
                payload: json.data

            })

        } catch (err) {
            console.log(err)
        }

    }
}