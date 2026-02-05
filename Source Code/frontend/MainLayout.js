import React from 'react';
import Navbar from './Navbar'; // The layout imports the Navbar
import './MainLayout.css';   // We will create this file next

// This component wraps all your logged-in pages
// "children" will be Dashboard, Page1, etc.
function MainLayout({ children }) {
  return (
    <div className="layout-container">
      
      {/* Request 4: The 40% "same" area */}
      <aside className="sidebar-area">
        <Navbar />
      </aside>
      
      {/* Request 5: The 60% content area */}
      <main className="content-area">
        {children}
      </main>

    </div>
  );
}

export default MainLayout;