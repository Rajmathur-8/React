import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext()

const ComponentA = () => {
    const [user,setUser] = useState("Raj")

  return (
    <div className='box'>
        <h1> ComponentA </h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ComponentB/>
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA