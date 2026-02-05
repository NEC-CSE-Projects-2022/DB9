import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure this is imported

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Add error state
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(''); // Clear old errors

    // You can add more validation here (e.g., password length)
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    try {
      // Call your backend registration route
      await axios.post('http://localhost:5000/api/register', {
        email: email,
        password: password,
      });

      // --- Signup Success ---
      // Automatically redirect to the login page
      navigate('/');

    } catch (err) {
      // --- THIS IS THE FIX ---
      if (err.response && err.response.data) {
        // This will show "User already exists."
        setError(err.response.data.message);
      } else {
        // Generic error
        setError('Registration failed. Please try again.');
      }
      // --- END OF FIX ---
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>

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
        
        <button type="submit">Create Account</button>
        
        <p className="form-link">
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;