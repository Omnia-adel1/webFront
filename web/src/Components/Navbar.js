import React from 'react';
import '../Styles/Navbar.css';
import wormieImage from '../Assets/Wormie.gif'; 
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-top">
        <div className="profile">
          <img src={wormieImage} alt="Profile" />
          <h2>Wormie</h2>
          <p>Computer Science | 23990102</p>
        </div>
        <div className="nav-links">
          <Link to="/account">
            <button className="btn">👤 Account</button>
          </Link>
          
          <Link to="/setting">
            <button className="btn">⚙️ Settings</button>
          </Link>

          <Link to="/language">
            <button className="btn">🌐 Language</button>
          </Link>

          <Link to="/about">
            <button className="btn">ℹ️ About</button>
          </Link>
        </div>
      </div>

      <div className="nav-bottom">
        <Link to="/logout">
          <button className="btn logout-btn">🚪 Logout</button>
        </Link>
        <div className="aiu-logo">AIU.</div>
      </div>
    </div>
  );
}

export default Navbar;
