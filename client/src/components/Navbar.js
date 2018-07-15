import React from 'react';
import "./Navbar.css";

const Navbar = ({title}) => (
  <div>
  <ul className="Navbar">
    <li><a href="/">Home</a></li>
    <li><a href="/Login">Login</a></li>
  </ul>
  <h1 className="Title">{title}</h1>
  </div>
)

export default Navbar;
