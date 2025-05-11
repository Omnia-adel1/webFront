import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/Transportation.css';
import { Link } from 'react-router-dom';
import BookImage from "../Assets/Book a ride.png"; 
import RideImage from "../Assets/Ride history.png";
import scheduleImage from "../Assets/Bus schedule.png";
import TrackImage from "../Assets/Track bus.png";
import HomeIcon from '../Components/HomeIcon';

function Transportation() {
  return (
    <div className="homepage-container">
      <Navbar />
      <HomeIcon/>
      <div className="main-content">
        <div className="bus-ride-box">
          <h2>Upcoming Bus Ride</h2>
          <div className="bus-timeline">
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

        <div className="tiles">
          <Link to="/ride-history" className="tile" aria-label="Ride History">
            <img src={RideImage} alt="Ride History" />
            <p>Ride History</p>
          </Link>
          <Link to="/bus-schedule" className="tile" aria-label="Bus Schedule">
            <img src={scheduleImage} alt="Bus Schedule" />
            <p>Bus Schedule</p>
          </Link>
          <Link to="/book-ride" className="tile" aria-label="Book a Ride">
            <img src={BookImage} alt="Book a Ride" />
            <p>Book a Ride</p>
          </Link>
          <Link to="/track-bus" className="tile" aria-label="Track Bus">
            <img src={TrackImage} alt="Track Bus" />
            <p>Track Bus</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Transportation;
