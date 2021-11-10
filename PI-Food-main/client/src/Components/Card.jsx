import React from "react";
import '../Css/Card.css'

export default function Card({ name, image, spoonacularScore, diets }) {
    return (
        <div className="cardComp">
            <div className="cardComp">
                <h3>{name}</h3>
            </div>
            <div >
                {diets && diets.map((d) => { return <span className='diet'>{d.name.replaceAll('_', ' ')}</span> }
                )}
                <h3>{diets}</h3>
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