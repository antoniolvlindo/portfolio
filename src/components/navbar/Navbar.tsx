import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="" alt="" />
        <a href="#">Antonio Lindo</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
