import { Component } from 'react'
import BurgerIngredients from './BurgerIngredients'

export default class BurgerStack extends Component {
    render() {
        return(
            <div>
                <h4>this is burgerStackz</h4>
                <BurgerIngredients />
            </div>
        )
    }
}