import { Component } from 'react'

export default class BurgerPane extends Component {
    render() {
        return(
            <div>
                <h2>Burger Pane 🍔</h2>
                <p>color ref: {this.props.color}</p>
            </div>
        )
    }
}