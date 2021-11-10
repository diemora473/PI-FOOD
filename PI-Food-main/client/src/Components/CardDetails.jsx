import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import '../Css/CardDetails.css'

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

    return (
        <div className="detail">
            <button onClick={goToBack}>◀</button>
            <h4>Name: {details.name}</h4>
            <img src={details.image} alt="img not found" width="200px" height="250px"
            />
            {/* <div className="h3-2">
                {details[0] ? (
                    <h2>
                        Type of Diets: {details[0].diets.map((d) => d.name).join(", ")}
                    </h2>
                ) : (
                    <h2>
                        Type of Diets:
                        {details[0].vegetarian === true
                            ? " " + details[0].diets.join(", ") + ", vegetarian"
                            : " " + details[0].diets.join(", ")}
                    </h2>
                )}
                <h3>
                    {details[0]
                        ? null
                        : "Dish types: " + details[0].dishTypes.join(", ")}
                </h3>
            </div> */}
            <h4>Diets: {details.diets}</h4>
            <h4>id: {details.id}</h4>
            <h5>Score:{details.spoonacularScore}</h5>
            <h4>Salubre: {details.healthScore}</h4>
            <p dangerouslySetInnerHTML={{ __html: details.summary, }} />
            <p>analyzedInstructions: {details.analyzedInstructions?.steps.map(el =>
                <p>
                    {el.number + " . "}
                    {el.step}
                </p>)}</p>
        </div>


    )

}
// import React from "react";

// import { useRef, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getRecipeDetail } from "../Actions./actions";
// // import './Detail.css';
// // import DetailedRecipe from "../DetailedRecipe/DetailedRecipe.js";

// export default function Detail(props) {
//     const dispatch = useDispatch();
//     const recipe = useSelector((state) => state.recipeDetail);
//     const [diets, setDiets] = React.useState([]);
//     // const matchRecipe = useRef(match.params.id);

//     useEffect(() => {
//         dispatch(getRecipeDetail(props.match.params.id));
//     }, [])

//     useEffect(() => {
//         document.querySelector("#summary").innerHTML = recipe.summary;
//     }, [recipe, diets])

//     console.log('hola');
//     return (
//         <div className='detail'>
//             <div className='title-box'>
//                 <div className='title'>
//                     <h4>{recipe.title}</h4>
//                 </div>
//                 <div className='score-box'>
//                     <div className='score'>
//                         <h2>{recipe.spoonacularScore}</h2>
//                         <p>Spoon Score</p>
//                     </div>
//                     <div className='score'>
//                         <h2>{recipe.healthScore}</h2>
//                         <p>Health Score</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='body'>
//                 <div className='image-box'>
//                     <img src={recipe.image} />
//                 </div>
//                 <div className='details-box'>
//                     <div className='summary-box'>
//                         <p id='summary'></p>
//                     </div>
//                 </div>
//             </div>
//             <div className='categories'>
//                 <div className='type-box'>
//                     <span>Diets:</span>
//                     {recipe.diets ? recipe.diets.map((diet) => {
//                         console.log(diet)
//                         return <span>{diet}</span>
//                     }) : []}
//                 </div>
//                 <div className='type-box'>
//                     <span>Dish types:</span>
//                     {recipe.dishTypes ? recipe.dishTypes.map((dish) => {
//                         console.log(dish)
//                         return <span>{dish}</span>
//                     }) : []}
//                 </div>
//             </div>
//         </div>
//     )
// }