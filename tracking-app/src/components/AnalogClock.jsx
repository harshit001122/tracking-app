import React, { useState, useEffect } from 'react';

const AnalogClock = ({ speed }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);

    return () => clearInterval(interval);
  }, [speed]);

  const degrees = (time.getSeconds() / 60) * 360;

  return (
    <div className="clock">
      <div className="hand" style={{ transform: `rotate(${degrees}deg)` }} />
    </div>
  );
};

export default AnalogClock;
