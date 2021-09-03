var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var localtunnel = require('localtunnel');

const ENV_FILE = path.join(__dirname, '.env');
require('dotenv').config({ path: ENV_FILE });

var port = process.env.port || 3000;
var subdomain = process.env.SUB_DOMAIN || 'teams-test1';

var onTunnelCreated = (err, tunnel) => {
  if (err) {
    console.log("Error while creating tunnel: " + err);
    readline.keyInPause("\nProgram ended...")
    process.exit();
  }

  console.log("Tunnel started with url: " + tunnel.url + " on port: " + port);
}

var app = express();
app.use(serveStatic(__dirname + '/public', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

app.get('/aaa', (req, res) => {
  return res.send('done');
});

app.get('/authredirect', (req, res) => {
  return res.redirect(`msteams://teams.microsoft.com/l/auth-callback/${req.query.authId}/${req.query.code}`)
});

// app.get('/authredirect', (req, res) => {
//   return res.send(`
//   ${req.query.code}
// `)
// });

app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);

  setTimeout(() => {
    localtunnel(port, { subdomain }, onTunnelCreated);
  }, 1000);
});

