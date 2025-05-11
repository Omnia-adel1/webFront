import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/CurrentGradesPage.css';
import HomeIcon from '../Components/HomeIcon';
function CurrentGradesPage() {
  const courses = [
    { name: 'Database Systems', grade: 'A' },
    { name: 'Software Engineering', grade: 'B+' },
    { name: 'Mathematics', grade: 'A-' },
    { name: 'Algorithms', grade: 'B' },
    { name: 'Artificial Intelligence', grade: 'A' },
  ];

  return (
    <div className="grades-page-container">
      <Navbar />
      <HomeIcon/>
      <div className="grades-content">
        <h1>Current Grades</h1>
        
        <div className="grades-list">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-info">
                <p className="course-name">{course.name}</p>
                <p className="course-grade">{course.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentGradesPage;
