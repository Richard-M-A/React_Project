import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create a navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace this with actual login logic
    if (username && password) {
      alert('Login successful');
      navigate('/home')
      // Redirect or perform other actions after successful login
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={styles.btn} type="submit">Login</button>
          <p className={styles.signup}>
            Don't have an account? <a href="#" onClick={() => navigate('/signup')}>Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
