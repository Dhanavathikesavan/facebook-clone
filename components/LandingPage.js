import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="left-panel">
        <h1 className="fb-title">facebook</h1>
        <p className="fb-text">Connect with friends and the world around you.</p>
      </div>
      <div className="right-panel">
        <form className="login-box" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Email or Phone" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
          <a href="#">Forgotten password?</a>
          <hr />
          
          {/* 🔽 Updated this button to navigate to /signup */}
          <button
            type="button"
            className="signup-btn"
            onClick={() => navigate('/signup')}
          >
            Create New Account
          </button>

          <button
            type="button"
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
