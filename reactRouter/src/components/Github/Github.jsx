import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Rajmathur-8')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

   const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers : {data.followers}
        <img src={data.avatar_url} alt='Git Photo' width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Rajmathur-8')
    return response.json()
}