import React from "react";

const Input = ({type, id, placeholder, value}) => {
    return (
        <div>
            <input 
            onChange={() => console.log(':)')} 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            value={value}/>
        </div>
    )
}

export default Input