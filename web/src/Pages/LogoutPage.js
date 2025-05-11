import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LogoutPage.css';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any stored authentication data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirect to login page after a short delay
    const timer = setTimeout(() => {
      navigate('/signin');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-container">
      <div className="logout-content">
        <h1>Logging Out</h1>
        <div className="loading-spinner"></div>
        <p>Thank you for using our application!</p>
        <p>Redirecting to login page...</p>
      </div>
    </div>
  );
};

export default LogoutPage; 