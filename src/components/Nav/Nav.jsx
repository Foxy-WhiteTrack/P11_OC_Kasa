import "./Nav.css";
import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Nav() {
  return (
    <div className="header-body">
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <nav className="nav">
        <NavLink to="/" className="link" activeclassname="active">Accueil</NavLink>
        <NavLink to="/about" className="link" activeclassname="active">A Propos</NavLink>
      </nav>
    </div>
  );
}