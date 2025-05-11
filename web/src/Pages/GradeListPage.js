import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/GradeListPage.css';
import HomeIcon from '../Components/HomeIcon';
function GradeListPage() {
  const [subjects, setSubjects] = useState([
    { topic: 'Database Systems', grade: 'A' },
    { topic: 'Software Engineering', grade: 'B+' },
    { topic: 'Mathematics', grade: 'A-' },
    { topic: 'Algorithms', grade: 'B' },
    { topic: 'Artificial Intelligence', grade: 'A' },
    { topic: 'Operating Systems', grade: 'B+' },
    { topic: 'Computer Networks', grade: 'A-' },
    { topic: 'Data Structures', grade: 'B' },
  ]);

  return (
    <div className="grade-list-page-container">
      <Navbar />
      <HomeIcon/>
      <div className="grade-list-content">
        <h1>Grade List for All Topics</h1>

        <div className="grade-list">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-card">
              <div className="subject-info">
                <p className="topic-name">{subject.topic}</p>
                <p className={`subject-grade grade-${subject.grade.replace('+', '')}`}>{subject.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GradeListPage;
