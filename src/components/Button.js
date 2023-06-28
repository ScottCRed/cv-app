import React from "react";

const Button = ({onClick, buttonText, buttonClass, id}) => {
    return (
        <div className="App">
        <h2>Hi it's me again:)</h2>
        <button onClick={onClick} className={buttonClass} id={id}> {buttonText} </button>
      </div>
    )
}

export default Button