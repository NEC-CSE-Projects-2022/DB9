import React from 'react';
import './Dashboard.css'; // Import the new dashboard styles

function Dashboard() {
  // We can add a dynamic name later, for now we'll use "User"
  const userName = "User"; 

  return (
    <div className="page-content">
      
      {/* --- Main Welcome Header Card --- */}
      <div className="dashboard-header">
        <h1>Welcome back, {userName}!</h1>
        <p>Here's a quick overview of your activity.</p>
      </div>

      {/* --- Grid for Stats Cards --- */}
      <div className="stats-grid">

        {/* --- Card 1 --- */}
        <div className="stat-card">
          <h3 className="stat-card-title">Corrections Made</h3>
          <p className="stat-card-value">12</p>
          <p className="stat-card-desc">in the last 7 days</p>
        </div>

        {/* --- Card 2 --- */}
        <div className="stat-card">
          <h3 className="stat-card-title">Total Logins</h3>
          <p className="stat-card-value">4</p>
          <p className="stat-card-desc">since you joined</p>
        </div>

        {/* --- Card 3 --- */}
        <div className="stat-card">
          <h3 className="stat-card-title">Authors</h3>
          <p className="stat-card-value">3</p>
          <p className="stat-card-desc">Meet the team</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;