import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/HelpPage.css';
import HomeIcon from '../Components/HomeIcon';
function HelpPage() {
  return (
    <div className="help-container">
      <Navbar />
      <HomeIcon/>
      <div className="help-content">
        <h1 className='Text'>Need Help?</h1>
        <p  className='Text'>If you’re experiencing issues or have questions, check out the resources below:</p>

        <div className="help-sections">
          <div className="help-card">
            <h3>📚 User Guide</h3>
            <p>Learn how to navigate and use all features in the platform.</p>
          </div>

          <div className="help-card">
            <h3>❓ FAQs</h3>
            <p>Find answers to the most frequently asked questions.</p>
          </div>

          <div className="help-card">
            <h3>📧 Contact Support</h3>
            <p>Email us at <a href="mailto:support@yourapp.com">support@yourapp.com</a> for direct help.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
