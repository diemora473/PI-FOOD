import React from "react";
import '../Css/Card.css'
import { Link } from "react-router-dom";

export default function Card({ name, image, spoonacularScore, diets, }) {
    console.log(diets)
    return (
        <div className="cardComp">
            <div className="cardComp">

                <h3>{name}</h3>
            </div>


            <div className="score">
                <h3>{spoonacularScore}</h3>

            </div>
            <div className='img-recipe'>
                <img src={image} alt="img not found" width="200px" height="250px" />
            </div>
        </div>
    )
}