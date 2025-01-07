import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
  const increaseValue=()=>{
    //counter += 1;
    if(counter>19 ){
      counter = 20;
    }else
    setCounter(counter+1)
  }
  const decreaseValue=()=>{
    //counter -= 1;
    if(counter<1){
      counter = 0;
    }else
    setCounter(counter-1)
  }
  return (
    <>
    <h1> Raj Mathur</h1>
    <h3> Counter : {counter} </h3>

    <button onClick={increaseValue}>+1 </button><br/>
    <button onClick={decreaseValue}>-1 </button>
    </>
  )
}

export default App
