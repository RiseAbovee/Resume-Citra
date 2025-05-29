import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BentoGrid from './components/BentoBox';
import Profile from './components/Profile';
import KuliahPage from './components/KuliahPage';
import ScrollToHashElement from './components/ScrollToHashElement';
import FloatingTimerOnly from './components/FloatingTimerOnly';

function App() {
  return (
    <Router>
      {/* Ini penting supaya efek scroll jalan */}
      <ScrollToHashElement />

      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Dashboard Bento</h1>
            <BentoGrid />
          </div>
        } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/kuliah" element={<KuliahPage />} />
        <Route path="/floating" element={<FloatingTimerOnly />} />
      </Routes>
    </Router>
  );
}

export default App;
