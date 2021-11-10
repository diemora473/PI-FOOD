import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../Actions/actions";
import '../Css/SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [state, setState] = useState("")

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameRecipes(name))
    }
    // function handleKeyPress(event) {
    //     if (event.key === 13) {
    //         console.log(event)
    //     }

    // }
    return (
        <div className='searchBar'>
            <input
                className="input"
                type="Text"
                placeholder="Buscar..."
                onChange={(e) => handleInputChange(e)}
            // onkeyPress={handleKeyPress}

            />
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn">
                <span class="material-icons">search</span>
            </button>
        </div>
    )
}