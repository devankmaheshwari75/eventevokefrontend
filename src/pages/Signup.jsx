import React, { useState } from "react";
import "../css/Signup.css"; // Importing the CSS file for styling
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("host");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      console.log("HIO");

      const data = await response.json();

      if (data === "exist") {
        alert("User already exists");
      } else if (data === "notexist") {
        history("/", { state: { id: email } });
      }
    } catch (error) {
      console.log("HIO");

      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Add your signup logic here

  //   // Assuming signup is successful, redirect to home page
  //   window.location.href = "/";
  // };

  return (
    <div className="auth-container">
      <div className="form-section">
        <h1>Sign Up</h1>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="host">Host</option>
            <option value="user">User</option>
          </select>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <div className="separator">OR</div>
        <div className="google-twitter-buttons">
          <button className="google-auth">
            <FcGoogle />
            Continue with Google
          </button>
          <button className="twitter-auth">
            <FaTwitter />
            Continue with Twitter
          </button>
        </div>
        <div className="signup-prompt">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
