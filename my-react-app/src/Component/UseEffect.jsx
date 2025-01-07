import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [color,setColor] = useState('green')
    useEffect(()=>{
        document.title = `Count : ${count} ${color}`
    },[count,color])
    const addCount =()=>{
        setCount(c => c+1)
    }
    const subCount =()=>{
        setCount(c => c-1)
    }
    const changeColor =()=>{
        setColor(c => c==="green" ? "red" : "green")
    }
  return (
    <>
        <p style={{color: color}}>Count : {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Sub</button><br />
        <button onClick={changeColor}>Change Color</button>
    </>
  )
}
