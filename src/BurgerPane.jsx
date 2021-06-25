import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props)=> {
    return(
        <div>
            <BurgerStack burgerIngredients={props.burgerIngredients}/>
            <ClearBurger clearBurger={props.clearBurger}/>
        </div>
    )
}
export default BurgerPane
// {/* <h4>this is Burger Pane 🍔 pane</h4>
//             <ul>{ingredientComponents} </ul> */}
//const ingredientComponents = this.props.clickedIngredients.map(item => (
//     <li onClick={(e) => {}}>
//     <BurgerStack ingredient={item.name} color={item.color}
//     />
//     </li>
//     ))
// //