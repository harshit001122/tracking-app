import React from 'react'
import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

function Home2() {
    const navigate = useNavigate();
    
    const handleComplete=()=>{
        navigate('/login')
    }
    
    return (
        <div className={styles.container}>
          <div className={styles.backgroundImage}></div>
          <div className={styles.popup}>
            <h1>We serve incomparable delicacies</h1>
            <p>All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
            <div className={styles.buttons}>
              <button className={styles.completeButton} onClick={handleComplete}>Completed</button>
            </div>
          </div>
        </div>
      );
}

export default Home2
