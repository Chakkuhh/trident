import React from "react";
import "./NavBar.css"; // Assuming you have a CSS file for styles
import trident from '../Assets/trident.png'

function Navbar() {
  return (
    <nav>
      <div className="logo">TRIDENT</div>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" id="icon">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns={trident}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <ul>
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Clients</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      
    </nav>
  );
}

export default Navbar;
