import React from "react";
import '../Css/Card.css'

export default function Card({ name, image, spoonacularScore }) {
    return (
        <div className='card'>
            <div className='card-info'>
                <h3>{name}</h3>

            </div>
            <h3>{spoonacularScore}</h3>
            <div className='img-recipe'>
                <img src={image} alt="img not found" width="200px" height="250px" />
            </div>
        </div>
    )
}