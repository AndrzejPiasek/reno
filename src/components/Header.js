import React from 'react';
import '../styles/Header.scss';


//import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
function Header() {
  return (
    <header className="header">
  <nav className="header__nav">
        <ul>
          <li><Link to="Malarstwo" smooth={true} duration={500}>Malarstwo</Link></li>
          <li><Link to="Porcelana" smooth={true} duration={500}>Porcelana</Link></li>
          <li><Link to="Drewno" smooth={true} duration={500}>Drewno</Link></li>
          <li><Link to="Papier" smooth={true} duration={500}>Papier</Link></li>
          <li><Link to="Skora" smooth={true} duration={500}>Skóra</Link></li>
          <li><Link to="Szklo" smooth={true} duration={500}>Szkło</Link></li>
          <li><Link to="Gips" smooth={true} duration={500}>Gips</Link></li>
          <li><Link to="Wosk" smooth={true} duration={500}>Wosk</Link></li>
          <li><Link to="Plastik" smooth={true} duration={500}>Plastik</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
