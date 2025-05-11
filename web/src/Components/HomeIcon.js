import React from "react";


const HomeIcon = () => {
  return (
        <div className="home-icon" onClick={() => openPage("/homepage")}>
          🏠 Home
        </div>
  );
};

function openPage(page) {
  window.location.href = page;
}

export default HomeIcon;
