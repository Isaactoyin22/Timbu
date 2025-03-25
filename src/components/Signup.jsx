import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup(email, password, name)) {
      setError("");
      navigate("/profile"); // Redirect to profile since user is auto-logged in
    } else {
      setError("Signup failed. Email may already be in use.");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <h1>Sign Up</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <span className={styles.loginLink} onClick={handleLoginClick}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
