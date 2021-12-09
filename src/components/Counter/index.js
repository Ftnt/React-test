import React, { useState, useEffect } from 'react'

//Styles
import "./Counter.css";

export const Counter = () => {

  const [counter, setcounter] = useState(0)

  return (
    <div>
      <p className={counter % 2 === 0 ? 'text-even' : 'text-odd'}> Counter: {counter} </p>
      <button className="btn" onClick={() => { setcounter(counter + 1) }}>+1 </button>
      <button className="btn" onClick={() => { setcounter(counter - 1) }}>-1</button>
    </div>
  )
}
