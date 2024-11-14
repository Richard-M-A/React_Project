import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import styles from './SignupPage.module.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Create a navigate function

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Replace this with actual signup logic
    if (username && email && password) {
      alert('Signup successful');
      // Redirect or perform other actions after successful signup
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className={styles.textbox}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.textbox}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.textbox}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.textbox}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className={styles.btn} type="submit">Sign Up</button>
          <p className={styles.login}>
            Already have an account? <a href="#" onClick={() => navigate('/login')}>Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
