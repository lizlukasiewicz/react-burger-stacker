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
  constructor(props) {
    super()
    this.state = {
      clickedIngredients: [],
    }
  }
  addIngredients = (e) => {
    //get value of clicked ingredient and color
    const newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor }
    //create a new array with current clickedIngredients status and append new ingredient]]
    const updatedClickedIng = this.state.clickedIngredients.concat(newIngredient)
    //setState with new clickIngredients array
    this.setState({
      clickedIngredients: updatedClickedIng
    })
    // let currentIngredient = this.state.clickedIngredients
    // currentIngredient.push(e.target.value
  }
  clearBurger = (e) => {
    this.setState({
      clickedIngredients: []
    })
  }

  render() {
    return(
      <div id="home" style={{display:'flex', alignItems:'flex-end'}} >
        <div id="ingredient">
        This is <IngredientList 
        ingredients={ingredients}
        addIngredients={this.addIngredients}
        />
        </div>
        <div id="burger">
        This is app <BurgerPane clickedIngredients={this.state.clickedIngredients} clearBurger={this.clearBurger}/>
        </div>
      </div>
    )
  }
}
