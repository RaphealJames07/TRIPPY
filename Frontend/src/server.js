const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configure proxy middleware
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://trippyapiv1.onrender.com',
    changeOrigin: true,
  })
);

// Serve Vite app as static files
app.use(express.static(__dirname + '/dist'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
