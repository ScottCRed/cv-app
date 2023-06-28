import React from "react";

const Input = ({type, id, placeholder, value, onInfoChange}) => {
    return (
        <div>
            <input 
            onChange={onInfoChange} 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            value={value}/>
        </div>
    )
}

export default Input