import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <Navbar />

      <div className="dashboard-main">
        <div className="top-section">
          <div className="class-box">
            <h4>Upcoming class</h4>
            <div className="class-info">
              <p className="course">
                CSE 111<br />
                <span>Database Systems</span>
              </p>
              <p className="time">
                Monday<br />
                <strong>10:00 AM</strong>
              </p>
            </div>
          </div>

          <div className="bus-box">
            <h4>Upcoming bus ride</h4>
            <div className="bus-info">
              <div className="timeline">
                <span>3:30 PM<br />AIU</span>
                <span>4:00 PM<br />Moharram Bek</span>
                <span>4:15 PM<br />Shatby</span>
                <span className="current">4:30 PM<br />Stanly</span>
                <span>5:00 PM<br />San Stefano</span>
              </div>
              <div className="bus-status">
                <p><strong>Current station:</strong> Stanly</p>
                <p><strong>ETA:</strong> 15 mins</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tiles-grid">
          {[
            { name: 'Transportation', icon: '🚍', path: '/transport' },
            { name: 'Classes', icon: '📄', path: '/classes' },
            { name: 'Help', icon: '❓', path: '/help' },
            { name: 'Maps', icon: '📍', path: '/homepage' },
            { name: 'Finances', icon: '💲', path: '/payment' },
            { name: 'Grades', icon: '✅', path: '/Grades' },
          ].map((tile, index) => (
            <Link key={index} to={tile.path} className="tile">
              <div className="icon">{tile.icon}</div>
              <p>{tile.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
