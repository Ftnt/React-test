import React, { useState, useEffect } from 'react'

//Styles
import "./Counter.css";

export const Counter = () => {

  const [counter, setcounter] = useState(0);

  let colorCount = 'text-odd';
  if (counter % 2 === 0) {
    colorCount = 'text-even';
  }

  return (
    <div>
      <p className={colorCount}> Counter: {counter} </p>
      <button className="btn" onClick={() => { setcounter(counter + 1) }}>+1 </button>
      <button className="btn" onClick={() => { setcounter(counter - 1) }}>-1</button>
    </div>
  )
}
