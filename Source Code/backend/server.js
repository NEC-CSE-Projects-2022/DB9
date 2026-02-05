const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

// 1. Middleware
app.use(cors()); // Allows frontend to talk to backend
app.use(express.json()); // Allows server to read JSON

// 2. Database Connection (using your credentials)
const sequelize = new Sequelize(
  'fullstack_db', // The database name you created
  'root',         // Your username
  'root123456',  // Your password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

// 3. Define the User "Model"
// This tells Sequelize what the 'Users' table looks like
const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// 4. API Route for REGISTRATION
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user in database
    await User.create({ email, password: hashedPassword });
    
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// 5. API Route for LOGIN (with Validation)
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validation 1: Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Validation 2: Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Success: Create and send a "keycard" (token)
    const token = jwt.sign(
      { userId: user.id },
      'your-very-secret-key', // Just a secret signature
      { expiresIn: '1h' }
    );
    
    res.status(200).json({ message: 'Login successful!', token });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// 6. Start the Server
const PORT = 5000; // Your backend will run on port 5000

sequelize.sync() // This creates the 'Users' table if it doesn't exist
  .then(() => {
    app.listen(5000, () => {
      console.log(`Backend server is running on http://localhost:${5000}`);
    });
    console.log('Successfully connected to MySQL and tables synced.');
  })
  .catch(err => {
    console.error('Unable to connect to MySQL:', err);
  });