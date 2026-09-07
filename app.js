const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Success!</h1><p>My Node.js app is running in Docker!</p>');
});
server.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});
