var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('./index.html', function(error, data) {
    if (!error) {
      response.writeHead(200, {
        'Content-Length': data.length,
        'content-type': 'text/html'});
      response.write(data);
      response.end();
    }
    else {
      response.send(error);
    }
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
