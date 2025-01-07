import React, { useEffect, useState } from 'react'

export const DigitalClock = () => {

    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000)
        return () => {
            clearInterval(intervalId)
        }
    },[])

    const formatTime = () => {
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridiem}`
    }
    const padZero = (num) => {
        return (num < 10 ? "0" : "") + num ;
    }

  return (
    <div className='clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}
