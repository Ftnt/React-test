import React, { useState } from 'react'

//Styles
import "./Counter.css";

export const Counter = () => {

  const [counter, setcounter] = useState(0);

  let colorCount = counter % 2 === 0 ? 'text-even' : 'text-odd';

  return (
    <div>
      <p className={colorCount}> Counter: {counter} </p>
      <button className="btn" onClick={() => { setcounter(counter + 1) }}>+1 </button>
      <button className="btn" onClick={() => { setcounter(counter - 1) }}>-1</button>
    </div>
  )
}
