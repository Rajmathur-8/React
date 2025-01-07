import React from 'react'

export const Button2 = () => {
    const handleClick =(e)=>{
        console.log(e);
        
    }
  return (
    <button onClick={(e)=> handleClick(e)}>
        Click me
    </button>
  )
}
