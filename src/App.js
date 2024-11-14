import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Homepage from './components/Homepage'; 
import Store from './components/Store';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/" element={<Navigate to="/login" replace />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
