import React, { useState, useEffect } from 'react'

export const Counter = () => {

  const [counter, setcounter] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  useEffect(() => {
    console.log("Me ejecuto solo la primera vez")
  }, [])

  useEffect(() => {
    console.log("Me ejecuto cada que cambie el estado Counter")
    if (counter % 3 === 0 && counter > 0) {
      setOtherCounter(otherCounter + 1)
    }
  }, [counter]);


  return (
    <div>
      <p> Counter: {counter} </p>
      <p> Counter % 3: {otherCounter} </p>
      <button onClick={() => { setcounter(counter + 1) }}>+1 </button>
      <button onClick={() => { setcounter(counter - 1) }}>-1</button>
    </div>
  )
}
