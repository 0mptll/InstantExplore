// // src/App.js
// import React from 'react';
// import Footer from './Components/Footer';
// import HomePage from './Components/pages/HomePage';
// import './App.css'; // Assuming you have some global styles here

// function App() {
//   return (
//     <div className="app-container">
//       <HomePage />
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/pages/HomePage';
import SignIn from './Components/SignIn';
import LogIn from './Components/LogIn';
import './App.css'; // Assuming you have some global styles here

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
