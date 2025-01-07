import React, { useEffect, useRef, useState } from 'react'

export const UseRef = () => {
    //let [number,setNumber] = useState(0)
    const inpputRef = useRef(null)
    useEffect(()=>{
        console.log("Component Rerendered");
        
    })
    function handleClick(){
       // setNumber(n=>n+1)
       ref.current = ref.current+1
       console.log(inpputRef);
       
       //console.log(ref.current);
       
    }
  return (
    <div>
        <button onClick={handleClick}>
        Click me
    </button>
    <input ref={inpputRef} />
    </div> 
  )
}
