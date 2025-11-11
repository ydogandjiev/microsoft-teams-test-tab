var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use('/index.html', serveStatic(__dirname + '/public/index.html', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Document-Isolation-Policy', 'isolate-and-require-corp');
  }
}));

app.use('/page1', serveStatic(__dirname + '/public/page1.html', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Document-Isolation-Policy', 'isolate-and-require-corp');
  }
}));

app.use('/page2', serveStatic(__dirname + '/public/page2.html', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Document-Isolation-Policy', 'isolate-and-require-corp');
  }
}));

app.use('/non-iframeable', serveStatic(__dirname + '/public/index.html', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('X-Frame-Options', 'DENY');
  }
}));

app.get('/download-200.pdf', (req, res) => {
  res.status(200).sendFile(__dirname + '/public/sample.pdf');
}); 

app.get('/download-401.pdf', (req, res) => {
  res.status(401).json({ error: 'Unauthorized access' });
});

app.get('/download-403.pdf', (req, res) => {
  res.status(403).json({ error: 'Access forbidden' });
});

app.use(serveStatic(__dirname + '/public', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

var port = process.env.port || 1337;
app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);
});