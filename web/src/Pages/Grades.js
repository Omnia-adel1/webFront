import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faChartBar, faCheck } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";
import "../Styles/Grades.css"
import { Link } from 'react-router';
import HomeIcon from '../Components/HomeIcon';
const Card = ({ icon, label, svg, link }) => (
  <div className="card" onClick={() => openPage(link)}>
    {icon && <FontAwesomeIcon icon={icon} className="fa-icon" />}
    {svg}
    <span>{label}</span>
  </div>
);

const Grades = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar">
        <Navbar />
        <HomeIcon/>
      </div>

      {/* Main content */}
      <div className="main-content">

        <div className="card-grid">
          <Card
            icon={faList}
            label="Grade List"
            link="/gradelist"
            svg={
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="5" cy="6" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
                <circle cx="5" cy="18" r="1"></circle>
                <line x1="9" y1="6" x2="19" y2="6"></line>
                <line x1="9" y1="12" x2="19" y2="12"></line>
                <line x1="9" y1="18" x2="19" y2="18"></line>
              </svg>
            }
          />

          <Card
            label="Search"
            link="/search"
            svg={
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            }
          />
            
              <Card
            icon={faChartBar}
            label="cGPA"
            link="/cgpa"
            svg={
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
              </svg>
            }
          />
          
          <Card
            icon={faCheck}
            label="Current Grades"
            link="/currentgrades"
            svg={
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11"></path>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

function openPage(page) {
  window.location.href = page;
}

export default Grades;
