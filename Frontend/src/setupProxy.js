import {require} from 'http-proxy-middleware'
import {module} from 'http-proxy-middleware'

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/trippyapi',
    createProxyMiddleware({
      target: 'http://trippyapiv1.onrender.com',
      changeOrigin: true,
    })
  );
};
