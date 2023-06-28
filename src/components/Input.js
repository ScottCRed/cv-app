import React from "react";

const Input = ({type, id, placeholder, value}) => {
    return (
        <div className="App">
        <h2>Hi it's me :)</h2>
        <input onChange={() => console.log(':)')} type={type} id={id} placeholder={placeholder} value={value}/>
      </div>
    )
}

export default Input