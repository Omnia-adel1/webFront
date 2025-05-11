import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/CgpaPage.css';
import HomeIcon from '../Components/HomeIcon';

function CgpaPage() {
  const cgpa = 3.74;
  const semesters = [
    { term: 'Fall 2022', gpa: 3.5 },
    { term: 'Spring 2023', gpa: 3.8 },
    { term: 'Fall 2023', gpa: 3.9 },
    { term: 'Spring 2024', gpa: 3.7 },
  ];

  return (
    <div className="cgpa-page-container">
      <Navbar />
      <HomeIcon/>
      <div className="cgpa-content">
        <h1>My Academic Performance</h1>

        <div className="cgpa-box">
          <h2>Current CGPA</h2>
          <div className="cgpa-value">{cgpa.toFixed(2)}</div>
        </div>

        <div className="semester-section">
          <h3>Semester-wise GPA</h3>
          <div className="semester-list">
            {semesters.map((sem, index) => (
              <div key={index} className="semester-card">
                <p className="term">{sem.term}</p>
                <p className="gpa">GPA: {sem.gpa}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CgpaPage;
