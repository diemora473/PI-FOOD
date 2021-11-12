import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByDiet, getRecipes, getDiets } from '../../Actions/actions';
import '../../Css/Filter.Diets.css'
function FilterByDiets() {
    const dispatch = useDispatch();

    const handleByDiets = (e) => {
        dispatch(filterByDiet(e.target.value))
    }
    const diets = useSelector((state) => state.diets)
    return (
        <div>
            <span>Filter By Diet: </span>
            <select className='filter-select' onChange={(e) => handleByDiets(e)}>
                <option value=''> -- Select --</option>
                {
                    diets.map((el) => {
                        return (
                            <option value={el.name}>{el.name}</option>
                        )

                    })
                }
                {/* <option value="gluten free">Gluten Free</option>
                <option value="lacto vegetarian">Lacto-Vegetarian</option>
                <option value="ovo vegetarian">Ovo-Vegetarian</option>
                <option value="dairy free"> dairy free</option>
                <option value="lacto ovo vegetarian"> lacto ovo vegetarian</option>
                <option value="paleolithic"> paleolithic</option>
                <option value="fodmap friendly"> fodmap friendly</option>
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescetarian</option>
                <option value="paleo">Paleo</option>
                <option value="primal">Primal</option>
                <option value="whole 30">Whole 30</option> */}
            </select>
        </div>
    )
}



export default FilterByDiets