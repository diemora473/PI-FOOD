import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function CardDetails() {
    const { id } = useParams()
    const [details, setDetails] = useState("")
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
    console.log(details)
    const goToBack = () => {
        history.goBack()
    }
    //para que no quede en un loops
    //     [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
    // [ ] Resumen del plato
    // [ ] Puntuación
    // [ ] Nivel de "comida saludable"
    // [ ] Paso a paso

    return (
        <div >
            <button onClick={goToBack}>◀</button>
            <h4>renderizo? si pa</h4>
            <img src={details.image} alt="img not found" width="200px" height="250px" />
            <h4>Nombre: {details.name}</h4>
            <h4>id: {details.id}</h4>
            <h5>Puntuación:{details.spoonacularScore}</h5>
            <h4>Salubre: {details.healthScore}</h4>
            {/* <h5>informacion: {details.summary}</h5> */}
            <p dangerouslySetInnerHTML={{ __html: details.summary, }} />
        </div>


    )

}