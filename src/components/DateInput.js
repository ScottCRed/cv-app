import React from "react";

const Input = ({type, id, placeholder, value}) => {
    return (
        <div>
        <h2>o.0</h2>
        <input onChange={() => console.log('it\'s a date <3')} type={type} id={id} placeholder={placeholder} value={value}/>
      </div>
    )
}

export default Input