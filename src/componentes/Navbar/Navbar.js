import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="logo" alt='netflix' src="/netflix.png"></img>
      <span className="nav-logo">Seuflix</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home">home</Link>
        <Link to="/Linkbout">series</Link>
        <Link to="/service">plano</Link>
        <Link to="/contact">Contatos</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
