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

app.use(serveStatic(__dirname + '/public', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

var port = process.env.port || 1337;
app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);
});