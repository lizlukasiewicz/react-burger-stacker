// import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'
import Ingredient from './Ingredient'


const IngredientList = (props) => {
    //map over array of ingredients (in a variable)
    //create an ingredient component for each item in the array
    const ingredientComponents = props.ingredients.map((item, index) => (
        <li onClick={(e) => props.addToBurger(e)} key={index} >
        <Ingredient ingredient={item.name} color={item.color}
        />
        </li>
        ))
    return(
        <div>
        <h2>INGREDIENT LIST 🥬 🍅</h2>
        <ul>{ingredientComponents} </ul>
        

        </div>
    )
}
export default IngredientList