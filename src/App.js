import { Component } from 'react'
import './App.css';

import BurgerPane from "./BurgerPane.jsx"
import IngredientList from "./IngredientList.jsx"

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

export default class App extends Component {
  render() {
    const list = ingredients.map((ingredient, index) => {
      console.log(`current array index is ${index}`)
      return <IngredientList
      name={ingredient.name}
      key={index}
      />
    })
    console.log(list)
    const burger = ingredients.map((color, index) => {
      console.log(`current color array ${index}🌈 `)
      return <BurgerPane 
      color={color.color}
      key={index}
      />
    })
    console.log(burger)
    return(
      <div id="home">
        <div id="burger">
        This is <BurgerPane />
        </div>
        <div id="ingredient">
        This is <IngredientList />
        </div>
      </div>
    )
  }
}