import React from 'react';
import '../styles/Nav.css';
//importo Link
import { Link } from "react-router-dom"
//dentro del componente hago los linkeos necesarios.


function Nav() {
  return (
    <nav className="navbar">
      <Link to='/' style={{ textDecoration: 'none' }}>
        <p className="coweather">ConverterCo</p>
      </Link>
    </nav>
  );
};

export default Nav;


