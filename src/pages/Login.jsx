import React, { useState } from 'react';
import '../css/Login.css'; // Importing the CSS file for styling
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        }),
        credentials: 'include',
      });

      const data = await response.json();

      if (data.success) {
        // Assuming the server sends back a token upon successful login
        localStorage.setItem('token', data.token);
        window.location.href = "/HostEvents";
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="form-section">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="forgot-password">
            <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
          </div>
          <button type="submit" className="signin-btn">Sign in</button>
        </form>
        <div className="separator">OR</div>
        <div className="google-twitter-buttons">
          <button className="google-auth"><FcGoogle />Continue with Google</button>
          <button className="twitter-auth"><FaTwitter />Continue with Twitter</button>
        </div>
        <div className="signup-prompt">
          Don't have an account? <Link to="/signup" className="signup-btn">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
