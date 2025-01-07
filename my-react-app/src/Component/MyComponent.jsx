import React, { useState } from 'react'

export const MyComponent = () => {
    const [name,setName]= useState("Ryujin")
    const updateName = () => {
        setName("Raj")
    } 
  return (
    <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>set name</button>
    </div>
  )
}
