import { Component } from 'react'

export default class ClearBurger extends Component {
    render() {
        return(
            <div>
                <button onClick={(e) => this.props.ClearBurger(e)} >🤢 Clear dem burgerz 🤮</button>
            </div>
        )
    }
}