import { Component } from 'react'
import Ingredient from './Ingredient'


export default class IngredientList extends Component {
    //map over array of ingredients (in a variable)
    //create an ingredient component for each item in the array
    render() {
        const ingredientComponents = this.props.ingredients.map(item => (
            <li>
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
}