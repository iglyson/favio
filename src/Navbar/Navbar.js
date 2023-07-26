import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="logo"src="netflix.png"></img>
      <span className="nav-logo">Seuflix</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">home</a>
        <a href="/about">series</a>
        <a href="/service">plano</a>
        <a href="/contact">Contatos</a>
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
