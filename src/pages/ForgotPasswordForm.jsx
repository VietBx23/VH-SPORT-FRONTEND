import React from "react";

function ForgotPasswordForm({ handleFormChange }) {
  return (
    <div id="forgotPasswordForm">
      <h3 className="card-title text-center">Forgot Password</h3>
      <form>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Your Email"
              type="email"
            />
            <span className="input-group-text">
              <i className="fas fa-envelope fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <a href="#" onClick={() => handleFormChange("signin")}>
          Back to Sign In
        </a>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
