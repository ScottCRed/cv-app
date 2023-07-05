import React from "react";

const Button = ({onClick, buttonText, buttonClass, id}) => {
    return (
        <div>
        <button 
        onClick={onClick} 
        className={buttonClass} 
        id={id}> 
        {buttonText} 
        </button>
      </div>
    )
}

export default Button