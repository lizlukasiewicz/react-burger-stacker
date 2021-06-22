import { Component } from 'react'


export default class Ingredient extends Component {
    render () {
        return(
        <div>
        <p style={{backgroundColor: this.props.color}}>{this.props.ingredient} <button onClick= {this.props.addIngredients} value={this.props.ingredient}> Add to stack</button></p> 
        </div>
        )
    }
}

// const ingredientComponents = this.props.ingredients.map((ingredient, index) => {
//     console.log(`current array index is ${index}`)
//     return <IngredientList
//     name={ingredient.name}
//     key={index}
//     />
//   })
//   console.log(list)
//   const burger = ingredients.map((color, index) => {
//     console.log(`current color array ${index}🌈 `)
//     return <BurgerPane 
//     color={color.color}
//     key={index}
//     />
//   })