import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/Signup';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import ProfileForm from './components/ProfileForm';
import JobListings from './components/JobListings';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/jobs" element={<JobListings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
