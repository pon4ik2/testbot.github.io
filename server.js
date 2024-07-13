// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// In-memory storage for user progress (you can use a database instead)
const userProgress = {};

app.use(bodyParser.json());
app.use(express.static('public'));

// Initialize user and save progress
app.post('/init', (req, res) => {
    const { userId } = req.body;
    userProgress[userId] = 0; // Initialize progress
    res.json({ message: 'User initialized successfully' });
});

// Increment user progress
app.post('/increment', (req, res) => {
    const { userId } = req.body;
    userProgress[userId] = (userProgress[userId] || 0) + 1; // Increment progress
    fs.writeFileSync('progress.json', JSON.stringify(userProgress)); // Save to file
    res.json({ count: userProgress[userId] });
});

// Get user progress
app.get('/progress/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({ count: userProgress[userId] || 0 });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
