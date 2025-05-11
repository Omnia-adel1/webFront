import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/SearchGradePage.css';
import HomeIcon from '../Components/HomeIcon';
function SearchGradePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);

  const subjects = [
    { topic: 'Database Systems', grade: 'A' },
    { topic: 'Software Engineering', grade: 'B+' },
    { topic: 'Mathematics', grade: 'A-' },
    { topic: 'Algorithms', grade: 'B' },
    { topic: 'Artificial Intelligence', grade: 'A' },
    { topic: 'Operating Systems', grade: 'B+' },
    { topic: 'Computer Networks', grade: 'A-' },
    { topic: 'Data Structures', grade: 'B' },
  ];

  const handleSearch = () => {
    const foundTopic = subjects.find((subject) =>
      subject.topic.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResult(foundTopic);
  };

  return (
    <div className="search-grade-page-container">
      <Navbar />
      <HomeIcon/>
      <div className="search-grade-content">
        <h1>Search Grade by Topic</h1>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a topic (ex:Computer Network)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        
        {result !== null ? (
          result ? (
            <div className="search-result">
              <p className="result-topic">{result.topic}</p>
              <p className={`result-grade grade-${result.grade.replace('+', '')}`}>
                Grade: {result.grade}
              </p>
            </div>
          ) : (
            <p className="no-result">No topic found with that name.</p>
          )
        ) : null}
      </div>
    </div>
  );
}

export default SearchGradePage;
