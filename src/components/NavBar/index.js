import React, { useState } from 'react'

import './NavBar.css';

export const NavBar = () => {

  const [active, setActive] = useState('');

  const handleClick = (element) => {
    setActive(element);
  }

  const checkActive = (element) => (active === element ? "text-select" : "")

  return (
    <div>
      <ul className='nav'>
        <li className={checkActive(1)} onClick={() => handleClick(1)} >Item1</li>
        <li className={checkActive(2)} onClick={() => handleClick(2)}>Item2</li>
        <li className={checkActive(3)} onClick={() => handleClick(3)}>Item3</li>
      </ul>
      <div>
        {active === 1 ? <p>Hola1</p> : ''}
        {active === 2 ? <p>Hola2</p> : ''}
        {active === 3 ? <p>Hola3</p> : ''}
      </div>
    </div>


  )
}
