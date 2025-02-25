import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

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

export default AuthPage;
