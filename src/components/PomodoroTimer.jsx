// src/pages/FloatingTimerOnly.jsx
import React from 'react';
import PomodoroTimer from '../components/PomodoroTimer';

const FloatingTimerOnly = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      width: '300px',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px'
    }}>
      <PomodoroTimer />
    </div>
  );
};

export default FloatingTimerOnly;
