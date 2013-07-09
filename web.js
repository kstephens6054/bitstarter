var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

app.get('/index.html', function(request, response) {
  response.send('Sending index.html');
  fs.readFile('./index.html', function(error, data) {
    if (!error) {
      response.send(data);
    }
    else {
      response.send(error);
    }
  };
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
