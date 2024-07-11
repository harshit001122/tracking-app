import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/home2');
  };

  const handleSkip = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.popup}>
        <h1>We serve incomparable delicacies</h1>
        <p>All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
        <div className={styles.buttons}>
          <button className={styles.skipButton} onClick={handleSkip}>Skip</button>
          <button className={styles.nextButton} onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
