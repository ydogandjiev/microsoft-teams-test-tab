var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var localtunnel = require('localtunnel');
var session = require('express-session');

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
app.set("view engine", "pug");
app.use(session({ secret: 'auth test', cookie: { maxAge: 60000 }}));
app.use(serveStatic(__dirname + '/public', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

app.get('/auth', (req, res) => {
  req.session.oauhRedirectMethod = req.query.oauhRedirectMethod;
  req.session.authId = req.query.authId;
  return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https://lnan-test2.loca.lt/authredirect&client_id=1073583513214-oplf5k63msf7at9rcj68vbrh265803vo.apps.googleusercontent.com&response_type=code&access_type=offline&scope=email%20profile`)
});

app.get('/authredirect', (req, res) => {
  if (req.session.completionType === 'deeplink')
    return res.redirect(`msteams://teams.microsoft.com/l/auth-callback?authId=${req.session.authId}&code=${req.query.code}`);
  else
    return res.render('auth_end', { code: req.query.code });
});

app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);

  setTimeout(() => {
    localtunnel(port, { subdomain }, onTunnelCreated);
  }, 1000);
});

