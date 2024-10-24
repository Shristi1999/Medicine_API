import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
return (
  <nav>
    <ul>
      <li><Link to="/">Xogene LOGO</Link></li>
      <li><Link to="/">Search</Link></li>
     
    </ul>
  </nav>
);

}

export default NavBar;
