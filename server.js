const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],
  removeHeaders: []
}).listen(port, host, function () {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});
