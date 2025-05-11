import React from "react";
import "../Styles/About.css";
import Navbar from "../Components/Navbar";

const Card = ({ icon, label, link }) => (
  <div className="card" onClick={() => openPage(link)}>
    <div className="icon">{icon}</div>
    <span>{label}</span>
  </div>
);

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main-content">
        <div className="home-icon" onClick={() => openPage("/homepage")}>
          🏠 Home
        </div>

        <div className="cards">
          <Card icon="📄" label="Terms and Services" link="terms-services.html" />
          <Card icon="📱" label="User Manual" link="user-manual.html" />
          <Card icon="💬" label="FAQs" link="faqs.html" />
        </div>
      </div>
    </div>
  );
};

function openPage(page) {
  window.location.href = page;
}

export default About;
