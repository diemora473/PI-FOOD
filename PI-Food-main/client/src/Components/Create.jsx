
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getDiets } from "../Actions/actions"
import { useDispatch, useSelector } from "react-redux";
import '../Css/Create.css'
function validate(input) {
    let errors = {};
    input.name
        ? (errors.name = "")
        : (errors.name = "You must name the recipe");
    input.summary
        ? (errors.summary = "")
        : (errors.summary = "You must provide a summary");
    input.diets.length < 1
        ? (errors.diets = "Choose at least one diet")
        : (errors.diets = "");
    if (!input.image.includes("https://") && !input.image.includes("http://")) {
        errors.image = "This isn't a valid image address";
    } else {
        errors.image = "";
    }
    return errors;
}

export function RecipeCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const diets = useSelector((state) => state.diets);
    const [errors, setErrors] = useState({});


    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);

    const [input, setInput] = useState({
        name: "",
        summary: "",
        spoonacularScore: 0,
        healthScore: 0,
        analyzedInstructions: "",
        image: "",
        diets: [],
    });


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        console.log(input)
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    function handleSelectDiet(e) {
        console.log(e.target.value)
        setInput({

            ...input,

            diets: [...input.diets, e.target.value], //porque aca puedo poner muchas dietas

        });
        console.log(input)

        setErrors(
            validate({
                ...input,
                diets: [...input.diets, e.target.value],
            })
        );
    }
    // let juancito = input.diets
    // console.log(juancito + "soy juancito")
    function handleSubmit(e) {
        if (input.name && input.summary && input.image && input.diets.length > 0) {

            e.preventDefault();
            console.log(input.diets + 'soy input2')
            dispatch(postRecipe(input));

            alert("Recipe succesfully Created!!");
            setInput({
                name: "",
                summary: "",
                spoonacularScore: 0,
                healthScore: 0,
                analyzedInstructions: "",
                image: "",
                diets: [],
            });
            history.push("/home");
        } else {
            e.preventDefault();
            alert("You must complete every field!!");
        }
    }

    function handleDelete(e, d) {
        e.preventDefault();
        setInput({
            ...input,
            diets: input.diets.filter((diet) => diet !== d),
        });
    }

    return (
        <div className="create">
            <Link to="/home">
                <button className="buttonToHome">Back to Home</button>
            </Link>
            <h1>Create your own Recipe here:</h1>
            <div className="form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label>Plate Name:</label>
                        <input
                            className="inputCreate"
                            placeholder="Complete here..."
                            type="text"
                            value={input.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div>
                        <label>Summary:</label>
                        <input
                            className="inputCreate"
                            placeholder="Complete here..."
                            type="text"
                            value={input.summary}
                            name="summary"
                            onChange={(e) => handleChange(e)}
                        />

                        {errors.summary && <p>{errors.summary}</p>}
                    </div>
                    <div>
                        <label>Score:</label>
                        <input
                            className="inputCreate"
                            type="text"
                            value={input.spoonacularScore}
                            name="spoonacularScore"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Health Level:</label>
                        <input
                            className="inputCreate"
                            type="text"
                            value={input.healthScore}
                            name="healthScore"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label className="labelInstr">Instructions:</label>
                        <textarea
                            type="text"
                            className="instruction"
                            placeholder="Complete here..."
                            rows="5"
                            value={input.analyzedInstructions}
                            name="analyzedInstructions"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input
                            className="inputCreate"
                            type="text"
                            placeholder="Example: https://..."
                            value={input.image}
                            name="image"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.image && <p>{errors.image}</p>}
                    </div>

                    <div className="dietsCreate">

                        <span>Type of Diet:</span>
                        <select onChange={(e) => handleSelectDiet(e)}>
                            {diets.map((d) => (
                                <option value={d.name} key={d.name}>
                                    {d.name}
                                </option>

                            ))}


                        </select>
                        {input.diets.map((d, i) => (
                            <ul key={i}>
                                <li>{d}</li>
                                <button onClick={(e) => handleDelete(e, d)}>x</button>
                            </ul>
                        ))}

                        {errors.diets && <p>{errors.diets}</p>}
                    </div>

                    <button type="submit" className="btnCreate">
                        Create Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}