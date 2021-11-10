
let initialState = {
    recipe: { result: [] },
    recipes: [],
    recipesRender: [],
    allrecipes: [],
    types: [],
    diets: [],
    diet: "",
}

export default function rootReducer(state = initialState, action, payload) {
    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }
        case 'GET_NAME_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }
        case 'POST_RECIPE':
            return {
                ...state,
            }
        case "ADD_RECIPE":
            return {
                ...state,
                postedRecipe: action.payload
            }
        case 'FILTER_BY_DIET':
            const data = state.recipe.result.filter(el => {
                debugger
                return el.diets === payload
            })
            return {
                ...state,
                recipes: {
                    result: data
                }
            }

        // case 'GET_TYPES':
        //     return {
        //         ...state,
        //         types: action.payload
        //     }

        // case 'FILTER_BY_STATUS':
        //     const allrecipes = state.recipes
        //     const statusFiltered = action.payload === 'All' ? allrecipes : allrecipes.filter(el => el.state === action.payload)
        //     return {
        //         ...state,
        //         recipes: statusFiltered

        //     }
        // case 'ORDER_MY_NAME':
        //     let sortedArr = action.payload === "asc" ?
        //         state.recipes.sort(function (a, b) {
        //             if (a.name > b.name) {
        //                 return 1;
        //             }
        //             if (b.name > a.name) {
        //                 return -1;
        //             }
        //             return 0;
        //         }) :
        //         state.recipes.sort(function (a, b) {
        //             if (a.name > b.name) {
        //                 return -1;
        //             }
        //             if (b.name > a.name) {
        //                 return 1;
        //             }
        //             return 0
        //         })
        //     return {
        //         ...state,
        //         recipes: sortedArr
        //     }

        case "SET_ORDER":
            var orderedRecipes = state.recipes;
            debugger
            if (action.payload === "see-all") {

                orderedRecipes.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
            } //sorts by id
            if (action.payload === "score-asc") {
                orderedRecipes = orderedRecipes.sort((a, b) => {
                    if (a.spoonacularScore > b.spoonacularScore) return 1;
                    if (a.spoonacularScore < b.spoonacularScore) return -1;
                    return 0;
                })
            } //sorts by asc score
            if (action.payload === "score-desc") {
                debugger
                orderedRecipes.sort((a, b) => {
                    if (a.spoonacularScore < b.spoonacularScore) return 1;
                    if (a.spoonacularScore > b.spoonacularScore) return -1;
                    return 0;
                })
            }  //sorts by desc score
            if (action.payload === "alph-asc") {
                orderedRecipes.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
            }  //sorts by title from a to z
            if (action.payload === "alph-desc") {
                orderedRecipes.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                })
            } //sorts by title from z to a
            return {
                ...state,
                recipesRender: orderedRecipes
            }

        default: return initialState
    }

}
