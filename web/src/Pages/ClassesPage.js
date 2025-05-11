import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/ClassesPage.css';
import HomeIcon from '../Components/HomeIcon';
function ClassesPage() {
  const classes = [
    {
      course: 'Database Systems',
      code: 'CSE 111',
      instructor: 'Dr. Ahmed Farouk',
      date: 'Monday',
      time: '10:00 AM',
    },
    {
      course: 'Computer Networks',
      code: 'CSE 202',
      instructor: 'Dr. Mona Saeed',
      date: 'Tuesday',
      time: '12:00 PM',
    },
    {
      course: 'Operating Systems',
      code: 'CSE 301',
      instructor: 'Dr. Walid Nassar',
      date: 'Wednesday',
      time: '9:00 AM',
    },
  ];

  return (
    <div className="classes-page-container">
      <Navbar />
      <HomeIcon/>
      <div className="classes-content">
        <h1>My Classes</h1>
        <div className="classes-list">
          {classes.map((cls, index) => (
            <div key={index} className="class-card">
              <h3>{cls.course} <span>({cls.code})</span></h3>
              <p><strong>Instructor:</strong> {cls.instructor}</p>
              <p><strong>Day:</strong> {cls.date}</p>
              <p><strong>Time:</strong> {cls.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassesPage;
