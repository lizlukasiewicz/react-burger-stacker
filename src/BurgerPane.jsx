import { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        return(
            <div>
                <h2>Burger Pane 🍔</h2>
                <p>color ref: {this.props.color}</p>
                <BurgerStack />
                <ClearBurger />
            </div>
        )
    }
}