import React, { useState } from "react";
import { ContentNavBar } from "../ContentNavBar";

import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState(1);
  const handleClick = (element) => setActive(element);
  const checkActive = (element) => (active === element ? "text-select" : "");
  const checkActiveContent = (itemId) => (active === itemId ? true : false);

  return (
    <div>
      <ul className="nav">
        <li className={checkActive(1)} onClick={() => handleClick(1)}>
          Item1
        </li>
        <li className={checkActive(2)} onClick={() => handleClick(2)}>
          Item2
        </li>
        <li className={checkActive(3)} onClick={() => handleClick(3)}>
          Item3
        </li>
      </ul>
      <div>
        {checkActiveContent(1) ? <ContentNavBar datos="Hola1" /> : ""}
        {checkActiveContent(2) ? <ContentNavBar datos="Hola2" /> : ""}
        {checkActiveContent(3) ? <ContentNavBar datos="Hola3" /> : ""}
      </div>
    </div>
  );
};

export default NavBar;
