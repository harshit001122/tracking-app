import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/post-login');
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/post-login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login to your account.</h1>
      <p>Please sign in to your account</p>
      <form className={styles.form} onSubmit={handleLogin}>
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
            type="password"
            id="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className={styles.forgotPassword}>Forgot password?</a>
        </div>
        <button type="submit" className={styles.signInButton}>Sign In</button>
        <div className={styles.divider}>
          <span>Or sign in with</span>
        </div>
        <button type="button" className={styles.googleSignIn} onClick={handleGoogleLogin}>
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" className={styles.googleLogo} />
        </button>
      </form>
      <p className={styles.register}>
        Don't have an account? <a href="/SignUP">Register</a>
      </p>
    </div>
  );
};

export default Login;
