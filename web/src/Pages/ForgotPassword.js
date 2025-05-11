import React from "react";
import "../Styles/ForgotPassword.css";

export default function ForgotPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="forgot-title">Reset Your Password</h2>
        <form className="forgot-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
