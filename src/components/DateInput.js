import React from "react";

const Input = ({type, id, placeholder, value, onDateChange}) => {
    return (
        <div>
          <p>{placeholder}</p>
        <input 
        onChange={onDateChange} 
        type={type} id={id} 
        value={value}/>
      </div>
    )
}

export default Input