import React from "react";

function SignUpForm({ handleFormChange }) {
  return (
    <div id="signupForm">
      <h3 className="card-title text-center">Sign Up</h3>
      <form>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Your Name"
              type="text"
            />
            <span className="input-group-text">
              <i className="fas fa-users fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <div className="input-group">
            <input className="form-control" placeholder="Email" type="email" />
            <span className="input-group-text">
              <i className="fas fa-envelope fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
            />
            <span className="input-group-text">
              <i className="fas fa-lock fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Confirm Password"
              type="password"
            />
            <span className="input-group-text">
              <i className="fas fa-lock fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <a href="#" onClick={() => handleFormChange("signin")}>
          Already have an account? Sign In
        </a>
      </div>
    </div>
  );
}

export default SignUpForm;
