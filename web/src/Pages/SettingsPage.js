import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Styles/SettingsPage.css';

function SettingsPage() {
  const navigate = useNavigate();
  
  const settings = [
    { 
      title: 'Manage Medical Information', 
      icon: '🩺', 
      path: '/settings/medical',
      description: 'Update your medical records and emergency contacts'
    },
    { 
      title: 'Manage Passwords', 
      icon: '🔐', 
      path: '/settings/password',
      description: 'Change your password and security settings'
    },
    { 
      title: 'Manage Personal Documents', 
      icon: '📄', 
      path: '/settings/documents',
      description: 'Upload and manage your important documents'
    },
    { 
      title: 'Manage Notification Settings', 
      icon: '🔔', 
      path: '/settings/notifications',
      description: 'Configure your notification preferences'
    },
    { 
      title: 'Manage Personal Information', 
      icon: '👤', 
      path: '/settings/personal-info',
      description: 'Update your personal details and contact information'
    },
  ];

  const handleSettingClick = (path) => {
    navigate(path);
  };

  return (
    <div className="settings-container">
      <Navbar />
      <div className="home-icon" onClick={() => openPage("/homepage")}>
          🏠 Home
        </div>
      <div className="settings-content">
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your preferences and personal data.</p>
        </div>

        <div className="settings-grid">
          {settings.map((setting, index) => (
            <div 
              key={index} 
              className="setting-tile"
              onClick={() => handleSettingClick(setting.path)}
            >
              <div className="tile-icon">{setting.icon}</div>
              <h3>{setting.title}</h3>
              <p className="tile-description">{setting.description}</p>
              <div className="tile-arrow">→</div>
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
