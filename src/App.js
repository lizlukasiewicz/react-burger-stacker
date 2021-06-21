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
    return(
      <div id="home" style={{display:'flex', alignItems:'flex-end'}} >
        <div id="burger">
        This is <BurgerPane />
        </div>
        <div id="ingredient">
        This is <IngredientList ingredients={ingredients}/>
        </div>
      </div>
    )
  }
}