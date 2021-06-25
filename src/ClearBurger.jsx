import React from 'react'


const ClearBurger = (props) => {
    return(
        <div>
            <button onClick={(e) => props.ClearBurger(e)} >🤢 Clear dem burgerz 🤮</button>
        </div>
    )
}
export default ClearBurger