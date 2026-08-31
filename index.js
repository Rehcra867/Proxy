const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve Ultraviolet service worker and assets
app.use('/uv', express.static(path.join(__dirname, 'node_modules/@titaniumnetwork-dev/ultraviolet/dist')));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Kiwi Proxy running on http://localhost:${PORT}`);
});
