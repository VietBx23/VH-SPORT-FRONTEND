import React, { useState, useEffect } from "react";
import { loginWithGoogle } from "../services/apiService.js"; // Đảm bảo đường dẫn đúng

function SignInForm({ handleFormChange }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Hàm xử lý đăng nhập Google
  const handleGoogleLogin = async (response) => {
    const idToken = response.credential; // Lấy idToken từ Google
    setIsLoading(true);
    setError("");
    try {
      const data = await loginWithGoogle(idToken);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log("Đăng nhập Google thành công:", data);
      window.location.href = "/";
    } catch (err) {
      setError(err.message || "Đăng nhập Google thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  // Khởi tạo Google Sign-In
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "965256866011-jlh1kddr9q0o3177hhf91s20bbdd0o90.apps.googleusercontent.com", // Client ID của bạn
      callback: handleGoogleLogin,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large", text: "signin_with" }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic đăng nhập thường (nếu cần, thêm sau)
  };

  return (
    <div id="signinForm">
      <h3 className="card-title text-center">Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Your Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span className="input-group-text">
              <i className="fas fa-user fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="input-group-text">
              <i className="fas fa-lock fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="d-grid">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Đang đăng nhập..." : "Sign In"}
          </button>
        </div>
      </form>
      <div className="text-center mt-3">
        <p>Or login with</p>
        <div className="social-login mt-3">
          <div id="googleSignInButton"></div>
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

export default SignInForm;
