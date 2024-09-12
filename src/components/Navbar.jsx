import React, { useState } from "react";
import './portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <a href="#" className="logo">Portfolio</a>
      <FontAwesomeIcon icon={faBars}   id="menu-icon" 
        onClick={toggleMenu}
        />
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
