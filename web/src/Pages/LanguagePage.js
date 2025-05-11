import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/LanguagePage.css';

function LanguagePage() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Optional: store in localStorage or update global state
  };

  return (
    <div className="language-container">
      <Navbar />
      <div className="home-icon" onClick={() => openPage("/homepage")}>
          🏠 Home
        </div>
      <div className="language-content">
        <h1>Language Settings</h1>
        <p>Select your preferred language:</p>

        <div className="language-selector">
          <label htmlFor="language-dropdown">Choose a language:</label>
          <select
            id="language-dropdown"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>

        <p className="selected-language">
          Current Language: <strong>{selectedLanguage}</strong>
        </p>
      </div>
    </div>
    
  );
}
function openPage(page) {
    window.location.href = page;
  }

export default LanguagePage;
