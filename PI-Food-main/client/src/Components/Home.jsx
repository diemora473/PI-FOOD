import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, setRecipeOrder, } from "../Actions/actions";
import { Link } from "react-router-dom";
import Card from "./Card"
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import FilterByDiets from "./Filters/Filters.Diets";
import '../Css/Home.css'


export default function Home(props) {
    const dispatch = useDispatch()
    const allrecipes = useSelector((state) => state.recipes)
    const [orden, setOrden] = useState("")
    const [CurrentPage, setCurrentPage] = useState(1)
    const [RecipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = CurrentPage * RecipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - RecipesPerPage
    const currentRecipes = allrecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    const [state, setState] = React.useState({
        filter: 'see-all',
        order: 'see-all',
        num: '1'
    })
    const [buttons, setButtons] = React.useState([]);
    const [subArray, setSubArray] = React.useState([]);

    // const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipesRender);

    function orderBy(order) { //dispatches an action that sorts recipes from the global state
        console.log(order);
        setState({
            ...state,
            order: order
        })
        dispatch(setRecipeOrder(order));
    }
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes())
    }

    // function handleSort(e) {
    //     e.preventDefault();
    //     dispatch(orderMyName(e.target.value))
    //     setCurrentPage(1)
    //     setOrden(`Ordenado${e.target.value}`)
    // }
    // function handleFilterStatus(el) {
    //     dispatch(filterRecipesByStatus(el.target.value))
    //     console.log(filterRecipesByStatus)
    // }

    return (
        <div className='Home'>
            <h1> recipes</h1>
            <Link to='/recipe' className="linkCreate">
                <button className="btnCreate">Create your recipe</button>
            </Link>
            <div className="showAll">

                <button onClick={e => { handleClick(e) }} >
                    Todas las recetas
                </button>
            </div>
            <div className='select'>

                <FilterByDiets />
                <span>Order by:</span>
                <select name="order"
                    onChange={(e) => orderBy(e.target.value)}>
                    <option value="see-all">See all</option>
                    <option value="score-asc">Lowest Score</option>
                    <option value="score-desc">Higher Score</option>
                    <option value="alph-asc">A-Z</option>
                    <option value="alph-desc">Z-A</option>
                </select>
            </div>

            {/* <select onChange={el => handleFilterStatus(el)}>
                    <option value="All">Todos</option>
                    <option value='summary'>Creados</option>
                    <option value='api'>Existente</option>
                </select> */}
            <SearchBar />
            <div className="paginate">

                <Paginado
                    recipesPerPage={RecipesPerPage}
                    allrecipes={allrecipes.length}
                    paginado={paginado}
                >
                </Paginado>
            </div>
            <div className="cards">
                {
                    currentRecipes?.map((el) => {
                        return (
                            <div >
                                <div key={el.id}>

                                    <Link to={`/${el.id}`} className="linkCard">
                                        <Card name={el.name} diet={el.diets} spoonacularScore={'Score' + ' ' + el.spoonacularScore} image={el.image} />
                                    </Link>

                                </div>
                            </div>
                        )
                    }



                    )
                }
            </div>
            <div className="paginate">

                <Paginado
                    recipesPerPage={RecipesPerPage}
                    allrecipes={allrecipes.length}
                    paginado={paginado}
                >
                </Paginado>
            </div>
        </div>
    )


}