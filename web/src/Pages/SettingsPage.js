import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/SettingsPage.css';

function SettingsPage() {
    const settings = [
        { title: 'Manage Medical Information', icon: '🩺', path: '/settings/medical' },
        { title: 'Manage Passwords', icon: '🔐', path: '/settings/password' },
        { title: 'Manage Personal Documents', icon: '📄', path: '/settings/documents' },
        { title: 'Manage Notification Settings', icon: '🔔', path: '/settings/notifications' },
        { title: 'Manage Personal Information', icon: '👤', path: '/settings/personal-info' },
      ];

  return (
    <div className="settings-container">
      <Navbar />
      <div className="home-icon" onClick={() => openPage("/homepage")}>
          🏠 Home
        </div>
      <div className="settings-content">
        <h1>Settings</h1>
        <p>Manage your preferences and personal data.</p>

        <div className="settings-grid">
          {settings.map((setting, index) => (
            <div key={index} className="setting-tile">
              <div className="tile-icon">{setting.icon}</div>
              <h3>{setting.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function openPage(page) {
    window.location.href = page;
  }
export default SettingsPage;
