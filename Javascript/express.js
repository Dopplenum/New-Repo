const express = require('express');
const app = express();
const port = 3000;

// Middleware example
app.use(express.json());

// GET route
app.get('/', (req, res) => {
  res.send('Hello, World! This is a GET request.');
});

// POST route
app.post('/', (req, res) => {
  console.log('POST request body:', req.body);
  res.send('Received POST request!');
});

// Middleware example
app.use((req, res, next) => {
  console.log('Middleware executed!');
  next();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
