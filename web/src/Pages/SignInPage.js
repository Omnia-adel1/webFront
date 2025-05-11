import React, { useState } from "react";
import "../Styles/SignInPage.css";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for Student ID
    const idRegex = /^\d{8}$/;

    if (!studentId) {
      setError("Student ID is required.");
      return;
    }

    if (!idRegex.test(studentId)) {
      setError("Student ID must be exactly 8 digits.");
      return;
    }

    // Optionally: Validate password presence
    if (!password) {
      setError("Password is required.");
      return;
    }

    setError(""); // clear any previous error

    // Redirect to home page (successful sign in simulation)
    navigate("/homePage");
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">CampusWise AIU</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Student ID</label>
            <input
              type="text"
              placeholder="e.g., 23990102"
              className="form-input"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}

          <div className="forgot-password">
            <a href="/forgetPassword">Forgot password?</a>
          </div>

          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
