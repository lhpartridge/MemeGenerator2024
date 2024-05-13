import React from 'react'
import Star from './components/Star'

const Star = (props)=> {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`../images/${props.isFilled}`} 
            alt="" 
            onclick={props.handleClick}
            />
    )
}

export default Star