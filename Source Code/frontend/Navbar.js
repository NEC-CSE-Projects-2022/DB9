import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd clear the user's token here
    console.log('Logging out...');
    navigate('/'); // Redirect to SignIn page
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">GEC</div>
      <ul className="navbar-links">
        {/* These are your four components */}
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/page1">Correction</Link></li>
        <li><Link to="/page2">FAQ</Link></li>
        <li><Link to="/page3">Authors</Link></li>
      </ul>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;