import React, { useState } from 'react'

export const NavBar = () => {

  const [color, setColor] = useState('');


  let colorCount1 = color === 'Option1' ? 'text-even' : 'text-odd';
  let colorCount2 = color === 'Option2' ? 'text-even' : 'text-odd';
  let colorCount3 = color === 'Option3' ? 'text-even' : 'text-odd';

  return (
    <div>
      <ul>
        <li className={colorCount1} onClick={() => { setColor('Option1') }} >Item1</li>
        <li className={colorCount2} onClick={() => { setColor('Option2') }}>Item2</li>
        <li className={colorCount3} onClick={() => { setColor('Option3') }}>Item3</li>
      </ul>
    </div>
  )
}
