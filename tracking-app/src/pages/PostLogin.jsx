import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PostLogin.module.css';

const PostLogin = () => {
  const [speed, setSpeed] = useState(1);
  const [time, setTime] = useState(new Date());
  const clockRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);

    return () => clearInterval(interval);
  }, [speed]);

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const handleShare = () => {
    const url = `${window.location.origin}/post-login?speed=${speed}`;
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  const getClockHandsStyle = (date) => {
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    
    const secondHandDegrees = (seconds * 6) - 180;
    const minuteHandDegrees = (minutes * 6) + (seconds / 10) - 180;
    const hourHandDegrees = (hours * 30) + (minutes / 2) - 180;

    return {
      secondHand: { transform: `rotate(${secondHandDegrees}deg)` },
      minuteHand: { transform: `rotate(${minuteHandDegrees}deg)` },
      hourHand: { transform: `rotate(${hourHandDegrees}deg)` },
    };
  };

  const clockHandsStyle = getClockHandsStyle(time);

  return (
    <div className={styles.container}>
      <h1>Tracking Screen</h1>
      <div className={styles.clock} ref={clockRef}>
        <div className={styles.clockFace}>
          <div className={`${styles.hand} ${styles.hourHand}`} style={clockHandsStyle.hourHand}></div>
          <div className={`${styles.hand} ${styles.minuteHand}`} style={clockHandsStyle.minuteHand}></div>
          <div className={`${styles.hand} ${styles.secondHand}`} style={clockHandsStyle.secondHand}></div>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <label htmlFor="speedSlider">Clock Speed: {speed}x</label>
        <input
          type="range"
          id="speedSlider"
          min="0.1"
          max="5"
          step="0.1"
          value={speed}
          onChange={handleSpeedChange}
          className={styles.slider}
        />
      </div>
      <button onClick={handleShare} className={styles.shareButton}>Share</button>
    </div>
  );
};

export default PostLogin;
