import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div>{quote}</div>;
};

export default RandomQuote;
