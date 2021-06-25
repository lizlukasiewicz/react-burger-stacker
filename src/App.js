import { useState } from 'react'
import './App.css';
import React from 'react'
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

const App = () => {
  const [burgerIngredients, setBurgerIngredients] = useState([])
  
    const addToBurger = (e) => {
      const newIngredient = {
        name: e.target.innerText, 
        color: e.target.style.backgroundColor 
      }
      const newBurger = burgerIngredients.concat(newIngredient)
    setBurgerIngredients(newBurger)
    // let currentIngredient = this.state.clickedIngredients
    // currentIngredient.push(e.target.value
  }

  const clearBurger = (e) => {
    setBurgerIngredients([])
  }

  
  return(
    <div id="home" style={{display:'flex', alignItems:'flex-end'}} >
      <IngredientList 
      ingredients={ingredients}
      addToBurger={addToBurger}
      />
      <BurgerPane burgerIngredients={burgerIngredients} clearBurger={clearBurger}/>
    </div>
  )
}
export default App