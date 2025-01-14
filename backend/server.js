const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'feedback_db' // Create this database in MySQL
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
  
  // Create feedback table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS feedback (
      id VARCHAR(36) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.query(createTableQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Feedback table ready');
    }
  });
});

// API Endpoints
app.post('/api/feedback', (req, res) => {
  const { name, email, message } = req.body;
  const id = crypto.randomUUID();
  
  const query = 'INSERT INTO feedback (id, name, email, message) VALUES (?, ?, ?, ?)';
  db.query(query, [id, name, email, message], (err, result) => {
    if (err) {
      console.error('Error saving feedback:', err);
      res.status(500).json({ error: 'Failed to save feedback' });
    } else {
      res.status(201).json({ message: 'Feedback saved successfully', id });
    }
  });
});

app.get('/api/feedback', (req, res) => {
  const query = 'SELECT * FROM feedback ORDER BY timestamp DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching feedback:', err);
      res.status(500).json({ error: 'Failed to fetch feedback' });
    } else {
      res.json(results);
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});