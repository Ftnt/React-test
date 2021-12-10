import React, { useState } from 'react'
import { BodyNavBar } from '../BodyNavBar';


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
        {active === 1 ? <BodyNavBar datos="Hola1" /> : ''}
        {active === 2 ? <BodyNavBar datos="Hola2" /> : ''}
        {active === 3 ? <BodyNavBar datos="Hola3" /> : ''}
      </div>
    </div>


  )
}
