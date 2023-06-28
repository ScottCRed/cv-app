import React from "react";

const Input = ({type, id, placeholder, value}) => {
    return (
        <div>
          <p>{placeholder}</p>
        <input 
        onChange={() => console.log('it\'s a date <3')} 
        type={type} id={id} 
        value={value}/>
      </div>
    )
}

export default Input