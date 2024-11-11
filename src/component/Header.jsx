import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Innomatics-Logo1.png" />
      </Link>
      <div className="header-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header