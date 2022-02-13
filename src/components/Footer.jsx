import React from "react";
import "../styles/Footer.css";
import Link from '../media/linkedin.svg'
import git from '../media/github.svg'

export default function Footer() {
  return (
    <footer className="Footer">
        <p> 
        Made by Javier Cordoba
        </p>
        <div>
        <a href="https://www.linkedin.com/in/javier-cordobaq/" target="_blank" rel="noreferrer" ><img src={Link} alt="" /></a> &nbsp; 
        <a href="https://github.com/Javier-Cordobaq" target="_blank" rel="noreferrer" ><img src={git} alt="" /></a>
        </div> 
    </footer>
  );
}
