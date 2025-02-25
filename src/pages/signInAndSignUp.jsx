import React, { useState } from "react";

function AuthPage() {
  const [formState, setFormState] = useState("signin");

  const handleFormChange = (state) => {
    setFormState(state);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <div className="card border-light p-4">
            <div className="row g-0">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img
                  alt="Illustration"
                  src="https://storage.googleapis.com/a1aa/image/MJIe7Sxix624cqyU1jMhMypPYScI8cU02nHnC9Q9SLrTGqBKA.jpg"
                  height="500"
                  width="400"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  {formState === "signin" && (
                    <SignInForm handleFormChange={handleFormChange} />
                  )}
                  {formState === "signup" && (
                    <SignUpForm handleFormChange={handleFormChange} />
                  )}
                  {formState === "forgotPassword" && (
                    <ForgotPasswordForm handleFormChange={handleFormChange} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignInForm({ handleFormChange }) {
  return (
    <div id="signinForm">
      <h3 className="card-title text-center">Sign In</h3>
      <form>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Your Email"
              type="email"
            />
            <span className="input-group-text ">
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
            <span className="input-group-text ">
              <i className="fas fa-lock fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="form-check mb-4">
          <input className="form-check-input" id="rememberMe" type="checkbox" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <a href="#" onClick={() => handleFormChange("signup")}>
          Create an account
        </a>
      </div>
      <div className="text-center mt-3">
        <p>Or login with</p>
        <div className="social-login mt-3">
          <a className="facebook" href="#">
            <img
              src="/src/assets/images/facebook.png"
              alt="Facebook"
              className="rounded-circle mb-3"
            />
          </a>
          <a className="twitter" href="#">
            <img
              src="/src/assets/images/twitter.png"
              alt="Twitter"
              className="rounded-circle mb-3"
            />
          </a>
          <a className="google" href="#">
            <img
              src="/src/assets/images/google.png"
              alt="Google"
              className="rounded-circle mb-3"
            />
          </a>
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="#" onClick={() => handleFormChange("forgotPassword")}>
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

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

export default AuthPage;
