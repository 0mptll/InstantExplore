// src/Components/Header.js
import React from 'react';
import './Header.css';
import logo from './assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        <img src={logo} alt="InstantExplore Logo" className="logo-img" />
        InstantExplore
      </a>
      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="/about">Log-in</a>
        <a href="/contact">Sign-in</a>
      </nav>
      <button className="header-toggle">☰</button>
    </header>
  );
};

export default Header;
