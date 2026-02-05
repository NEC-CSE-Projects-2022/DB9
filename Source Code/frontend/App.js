import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import the new layout
import MainLayout from './components/MainLayout';

// Import your pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* --- Public Routes (No Layout) --- */}
        {/* These pages will NOT have the sidebar */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* --- Protected Routes (WITH Layout) --- */}
        {/* These pages WILL have the 40/60 sidebar layout */}
        <Route 
          path="/dashboard" 
          element={<MainLayout><Dashboard /></MainLayout>} 
        />
        <Route 
          path="/page1" 
          element={<MainLayout><Page1 /></MainLayout>} 
        />
        <Route 
          path="/page2" 
          element={<MainLayout><Page2 /></MainLayout>} 
        />
        <Route 
          path="/page3" 
          element={<MainLayout><Page3 /></MainLayout>} 
        />
      </Routes>
    </div>
  );
}

export default App;