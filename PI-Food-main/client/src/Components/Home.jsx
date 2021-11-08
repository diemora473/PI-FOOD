import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, filterRecipesByStatus, orderMyName } from "../Actions/actions";
import { Link } from "react-router-dom";
import Card from "./Card"
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import styles from "../Css/Home.module.css"


export default function Home() {
    const dispatch = useDispatch()
    const allrecipes = useSelector((state) => state.recipes)
    const [orden, setOrden] = useState("")
    const [CurrentPage, setCurrentPage] = useState(1)
    const [RecipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = CurrentPage * RecipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - RecipesPerPage
    const currentRecipes = allrecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

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
    function handleSort(e) {
        e.preventDefault();
        dispatch(orderMyName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado${e.target.value}`)
    }
    function handleFilterStatus(el) {
        dispatch(filterRecipesByStatus(el.target.value))
        console.log(filterRecipesByStatus)
    }

    return (
        <div>
            <Link to='/recipe'>Crear Receta</Link>
            <h1>creemos recipes</h1>
            <button onClick={e => { handleClick(e) }}>
                Todas las recetas
            </button>
            <div>
                <select onChange={e => handleSort(e)}>
                    <option value='asc'>Ascendente</option>
                    <option value='des'>Descendente</option>
                </select>
                <select onChange={el => handleFilterStatus(el)}>
                    <option value="All">Todos</option>
                    <option value='summary'>Creados</option>
                    <option value='api'>Existente</option>
                </select>
                <SearchBar />
                <Paginado
                    recipesPerPage={RecipesPerPage}
                    allrecipes={allrecipes.length}
                    paginado={paginado}
                >
                </Paginado>
                {
                    currentRecipes?.map((el) => {
                        return (
                            <div className={styles.Card}>
                                <div key={el.id}>

                                    <Link to={`/${el.id}`}>
                                        <Card name={el.name} image={el.image} />
                                    </Link>

                                </div>
                            </div>
                        )
                    }




                    )
                }
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