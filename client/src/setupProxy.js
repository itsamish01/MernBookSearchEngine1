const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Update this to the API route you're using in the client-side code.
    createProxyMiddleware({
      target: 'http://localhost:3007', // Make sure this matches the server-side port.
      changeOrigin: true,
    })
  );
};
