import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/AccountPage.css';
import { Link } from 'react-router-dom';


function AccountPage() {
  return (
    <div className="account-container">
      <Navbar />
      <div className="home-icon" onClick={() => openPage("/homepage")}>
          🏠 Home
        </div>
      <div className="account-content">
        <h1>Your Account</h1>
        <p>Manage your profile and personal settings below.</p>

        <div className="account-info">
          <div className="account-section">
            <h3>👤 Profile Information</h3>
            <p><strong>Name:</strong> Omnia Adel</p>
            <p><strong>Email:</strong> omnia.adel.2023@aiu.edu.eg</p>
            <p><strong>Student ID:</strong> 22101925</p>
          </div>

          <div className="account-section">
            <h3>⚙️ Settings</h3>
            <p>Change your password, update your email, or configure notifications.</p>
            <Link to={"/setting"}>
                 <button className="account-button">Update Settings</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
function openPage(page) {
  window.location.href = page;
}
export default AccountPage;
