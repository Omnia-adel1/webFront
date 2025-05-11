import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LogoutPage from './Pages/LogoutPage';
import SignInPage from './Pages/SignInPage';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* Add other routes here */}
        </Routes>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
