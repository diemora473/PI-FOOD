import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import '../Css/CardDetails.css'

export default function CardDetails() {
    const { id } = useParams()
    const [details, setDetails] = useState("")
    // const detail = useSelector
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {

        axios.get('http://localhost:3001/recipe/getId/' + id)
            .then(flama => {
                setDetails(flama.data)
            })
        return () => {
            setDetails(null)
        }

    }, [])
    const goToBack = () => {
        history.goBack()
    }
    return (
        <div className="detail">
            <button onClick={goToBack}>◀</button>
            <h4>Name: {details.name}</h4>
            <div className='img'>
                <img src={details.image} alt="img not found" width="200px" height="250px"
                />

            </div>

            <h4>Diets: {details.diets}</h4>
            {/* <h4>Diets: {details.typeof(details[0].diets[0]) === "string" ? details[0].diets.map(e => e) : details[0].diets.map(e => e.name)}</h4> */}

            <h4>id: {details.id}</h4>
            <h5>Score:{details.spoonacularScore}</h5>
            <h4>Salubre: {details.healthScore}</h4>
            <p dangerouslySetInnerHTML={{ __html: details.summary }} />
            <p>analyzedInstructions: {details.analyzedInstructions}
            </p>
        </div>


    )

}
