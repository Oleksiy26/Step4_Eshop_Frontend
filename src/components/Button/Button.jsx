import React from "react";
import "./Button.scss"

const Button = (props) => {
    const { text, onClick, className, type} = props;
    return(
        <button 
            className = {className}
            onClick = {onClick}
            type= {type}
        >
            {text}
        </button>
    )

}

export default Button;