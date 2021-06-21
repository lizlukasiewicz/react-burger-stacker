import React from 'react'

const Ingredients = (props) => {
    return (
        <div>
            <h4>Hello from the Ingredients!!</h4>
            <p style= {{color: props.name}}>Name: {props.name}</p>
            <p style={{color: props.color}}>Color: {props.color} </p>
        </div>
    )
}

export default Ingredients 