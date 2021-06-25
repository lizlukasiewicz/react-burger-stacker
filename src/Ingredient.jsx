import React from 'react'


const Ingredient = (props) => {
    return(
        <p style={{backgroundColor: props.color}}>
            {props.ingredient} 
        </p> 
    )

}
export default Ingredient
//<button onClick= {props.addIngredients} value={props.ingredient}> Add to stack</button>
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