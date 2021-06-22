import { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        const ingredientComponents = this.props.clickedIngredients.map(item => (
            <li onClick={(e) => {}}>
            <BurgerStack ingredient={item.name} color={item.color}
            />
            </li>
          ))
        return(
            <div>
                <h4>this is Burger Pane 🍔 pane</h4>
                <ul>{ingredientComponents} </ul>
                <BurgerStack clickedIngredients={this.props.clickedIngredients}/>
                <ClearBurger clearBurger={this.props.clearBurger}/>
            </div>
        )
    }
}