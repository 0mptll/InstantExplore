// src/App.js
import React from 'react';
import Footer from './Components/Footer';
import HomePage from './Components/pages/HomePage';
import './App.css'; // Assuming you have some global styles here

function App() {
  return (
    <div className="app-container">
      <HomePage />
    </div>
  );
}

export default App;
