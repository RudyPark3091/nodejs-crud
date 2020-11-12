const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, {
    'Set-Cookie': ['firstCookie=cookie!', 'secondCookie=ck!']
  });
  res.end('Hello World');
}).listen(3000);
