import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure this is imported

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // This state will hold our error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear old errors

    // --- Start Client-Side Validation ---
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }
    // --- End Client-Side Validation ---

    try {
      // Call your backend API
      const response = await axios.post('http://localhost:5000/api/login', {
        email: email,
        password: password,
      });

      // --- Login Success ---
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');

    } catch (err) {
      // --- THIS IS THE FIX ---
      // This block runs if the server sends a 400 or 401 error
      
      if (err.response && err.response.data) {
        // Set the error state to the *exact message* from the server
        setError(err.response.data.message);
      } else {
        // Generic error if the server is down
        setError('Login failed. Please try again.');
      }
      // --- END OF FIX ---
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <h2>Sign In</h2>
        
        {/* This line displays the error message */}
        {error && <p className="error">{error}</p>}
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit">Login</button>
        
        <p className="form-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;