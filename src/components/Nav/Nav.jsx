import "./Nav.css";
import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="Link">Accueil</Link>
          <Link to="/about" className="Link">A Propos</Link>
        </nav>
      </div>
    </>
  )
}