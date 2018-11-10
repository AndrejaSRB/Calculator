import React from 'react';
import './Button.css';

const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
}
// We are asking if val is not a number or "." or "=".


const Button = (props) => <div className={`button-wrapper ${
    isOperator(props.children) ? null : 'operator'
}`} onClick={() => props.handleClick(props.children)}>{props.children}</div>

// We are asking if it's operator or no. If it's then we are adding class "operator".

export default Button;

