import React, { useState } from 'react';
import '../Styles/Header.css';
import Shova_logo from '../assets/Shova_logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#"> 
          <img src={Shova_logo} alt="Logo" className="logo"/>
        </a>

        <div className={`link ${open ? "active" : ""}`}>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
