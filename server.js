var express = require('express');
var serveStatic = require('serve-static');
var botService = require('./bot-service');

var app = express();
app.use(serveStatic(__dirname + '/public', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

app.use('/page1', serveStatic(__dirname + '/public/page1.html', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

app.use('/page2', serveStatic(__dirname + '/public/page2.html', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

app.get("/bot", (req, res) => {
  const page = (req.query && req.query.page) || '';
  const response = botService(page);
  res.json(response);
});

var port = process.env.port || 3000;
app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);
});
