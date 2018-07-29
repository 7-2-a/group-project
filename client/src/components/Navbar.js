import React from 'react';
import "./Navbar.css";


const Navbar = ({title}) => (
  <div>
  <ul className="Navbar">
    <li><a href="/"><i id="gly" class="fas fa-home"></i>  </a></li>
    <li><a href="/Login"><i id="gly" class="fas fa-user-astronaut"></i></a></li>
    <li><a href="/MakeQuiz"><i id="gly" class="fas fa-pencil-alt"></i></a></li>
  </ul>
  <h1 className="Title">{title}</h1>
  
  </div>
  
)

export default Navbar;
