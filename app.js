var port = process.env.PORT || 8080,
  http = require('http'),
  fs = require('fs'),
  html = fs.readFileSync('index.html', 'utf-8');

var envs = `ENVS: ${process.env.REDIS_URL}, ${process.env.AWS_REGION}`;

var log = function (entry) {
  fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    var body = '';

    req.on('data', function (chunk) {
      body += chunk;
    });

    req.on('end', function () {
      if (req.url === '/') {
        log('Received message: ' + body);
      } else if ((req.url = '/scheduled')) {
        log(
          'Received task ' +
            req.headers['x-aws-sqsd-taskname'] +
            ' scheduled at ' +
            req.headers['x-aws-sqsd-scheduled-at']
        );
      }

      res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
      res.end();
    });
  } else {
    res.writeHead(200);
    res.write(html.replace('{{DATA}}', envs));
    res.end();
  }
});

// Listen on port 8080, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
