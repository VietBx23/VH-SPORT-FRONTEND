import React, { useState } from "react";

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForms = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container-fluid ">
      <div className="row justify-content-center cả">
        <div className="col-sm-8">
          <div className="card p-4">
            <div className="row g-0">
              <div
                className="col-md-6 d-flex justify-content-center align-items-center"
                id="signinImage"
              >
                <img
                  alt="Illustration"
                  className=""
                  src="https://storage.googleapis.com/a1aa/image/MJIe7Sxix624cqyU1jMhMypPYScI8cU02nHnC9Q9SLrTGqBKA.jpg"
                  height="500"
                  width="400"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  {!isSignUp ? (
                    <SignInForm toggleForms={toggleForms} />
                  ) : (
                    <SignUpForm toggleForms={toggleForms} />
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

function SignInForm({ toggleForms }) {
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
            <span className="input-group-text text-primary">
              <i class="fas fa-envelope fa-lg"></i>
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
            <span className="input-group-text text-primary">
              <i class="fas fa-lock fa-lg"></i>
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
        <a className="toggle-button" onClick={toggleForms}>
          Create an account
        </a>
      </div>
      <div className="text-center mt-4">
        <p>Or login with</p>
        <div className="social-login">
          <a className="facebook" href="#">
            {/* <FaFacebookF /> */}
          </a>
          <a className="twitter" href="#">
            {/* <FaTwitter /> */}
          </a>
          <a className="google" href="#">
            {/* <FaGoogle /> */}
          </a>
        </div>
      </div>
    </div>
  );
}

function SignUpForm({ toggleForms }) {
  return (
    <div id="signupForm" style={{ display: "block" }}>
      <h3 className="card-title text-center">Sign Up</h3>
      <form>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Your Name"
              type="text"
            />
            <span className="input-group-text">{/* <FaUser /> */}</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="input-group">
            <input className="form-control" placeholder="Email" type="email" />
            <span className="input-group-text">{/* <FaEnvelope /> */}</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
            />
            <span className="input-group-text">{/* <FaLock /> */}</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Confirm Password"
              type="password"
            />
            <span className="input-group-text">{/* <FaLock /> */}</span>
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <a className="toggle-button" onClick={toggleForms}>
          Already have an account? Sign In
        </a>
      </div>
    </div>
  );
}

export default AuthPage;
