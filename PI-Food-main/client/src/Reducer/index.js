
let initialState = {
    recipes: [],
    allrecipes: [],
    types: []
}

function rootReducer(state = initialState, action) {
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
        // case 'GET_TYPES':
        //     return {
        //         ...state,
        //         types: action.payload
        //     }

        case 'FILTER_BY_STATUS':
            const allrecipes = state.recipes
            const statusFiltered = action.payload === 'All' ? allrecipes : allrecipes.filter(el => el.state === action.payload)
            return {
                ...state,
                recipes: statusFiltered

            }
        case 'ORDER_MY_NAME':
            let sortedArr = action.payload === "asc" ?
                state.recipes.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.recipes.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                recipes: sortedArr
            }


        default: return initialState
    }

}

export default rootReducer;