const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/apps', require('./routes/apps'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/categories', require('./routes/categories'));

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
