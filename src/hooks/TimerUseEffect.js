import React from 'react'
import { useEffect, useState } from 'react'
const TimerUseEffect = () => {
 const [count, setCount] = useState(0);

 useEffect(()=>{
    setTimeout(()=>{
        setCount(count +1)
    } ,1000)
 })
  return (
    <div>this is coming from useEffect {count}</div>
  )
}

export default TimerUseEffect