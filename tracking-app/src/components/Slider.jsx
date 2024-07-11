import React from 'react';
import { Slider as MuiSlider } from '@mui/material';

const Slider = ({ value, onChange }) => {
  return (
    <MuiSlider
      value={value}
      onChange={(e, newValue) => onChange(newValue)}
      step={0.1}
      min={0.1}
      max={5}
    />
  );
};

export default Slider;
