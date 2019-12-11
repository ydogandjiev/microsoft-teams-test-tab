var express = require('express');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname + '/public', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

var port = process.env.port || 3000;
app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);
});