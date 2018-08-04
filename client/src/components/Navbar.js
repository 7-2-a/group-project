import React from 'react';
import "./Navbar.css";


const Navbar = ({title}) => (
  <div>
  <nav>
  <ul className="Navbar">

    <li><a href="/"><i id="gly" className="fas fa-home"></i>  </a></li>
    <li><a href="/Login"><i id="gly" className="fas fa-user-astronaut"></i></a></li>
    <li><a href="/MakeQuiz"><i id="gly" className="fas fa-pencil-alt"></i></a></li>
  </ul>
  </nav>
  <h1 className="Title">{title}</h1>

  </div>

)

export default Navbar;
