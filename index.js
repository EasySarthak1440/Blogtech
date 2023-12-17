const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // or any port you prefer

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/search', (req, res) => {
  // Handle search logic here and send the appropriate response
  const query = req.query.query;
  // Perform search logic using the query parameter
  // For now, let's just send a simple response
  res.send(`Search results for: ${query}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
