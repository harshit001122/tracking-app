import React from 'react';
import { Button } from '@mui/material';

const ShareButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Share
    </Button>
  );
};

export default ShareButton;
