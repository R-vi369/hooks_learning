import { useState } from 'react'
import "../App.css";
export const UseState = () => {

  const [set, setCount] = useState(0);
  function incrementCount() {
    setCount(set + 1);
  }
  function decrementCount() {
    if (set === 0){
      setCount(0);

  }
  else
  {
    setCount(set - 1);
  }}
  return (

    <>
      <div className="body">

        <button onClick={incrementCount}>Increment</button>
        <h4 style={{ color: 'white' }}>{set}</h4>
        <button onClick={decrementCount}>Decrement</button>

        <button onClick={function reset(){setCount(0)}}>reset</button>
      </div>

    </>
  )
}
