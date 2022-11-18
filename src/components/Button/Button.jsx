import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.scss"

const Button = (props) => {
    const { text, onClick, className, type, to, href} = props;

    let Component;

    if (href) {
        Component = "a"
    } else if (to) {
        Component = NavLink
    } else {
        Component = "button"
    }

    return(
        <Component
            className = {'btn ' + className}
            href={href}
            to={to}
            onClick = {onClick}
            type={href || to ? undefined : type}
        >
            {text}
        </Component>
    )

}

export default Button;