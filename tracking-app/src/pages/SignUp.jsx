import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUP.module.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUP = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('You must accept the terms and conditions');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create your new account</h1>
      <p>Create an account to start looking for the food you like</p>
      <form className={styles.form} onSubmit={handleRegister}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="username"
            placeholder="User Name"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="terms"
            className={styles.checkbox}
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <label htmlFor="terms">
            I Agree with <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </label>
        </div>
        <button type="submit" className={styles.registerButton}>Register</button>
        <div className={styles.divider}>
          <span>Or sign in with</span>
        </div>
        <button type="button" className={styles.googleSignIn}>
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" className={styles.googleLogo} />
        </button>
      </form>
      <p className={styles.login}>
        Have an account? <a href="/login">Sign In</a>
      </p>
    </div>
  );
};

export default SignUP;
