import "./Nav.css";
import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <div className="header-body">
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <nav className="nav">
        <NavLink exact to="/" className="link" activeClassName="active">Accueil</NavLink>
        <NavLink to="/about" className="link" activeClassName="active">A Propos</NavLink>
      </nav>
    </div>
  );
}