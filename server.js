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
app.set("view engine", "pug");
app.use(serveStatic(__dirname + '/public', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

app.get('/auth', (req, res) => {
  return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${req.query.redirect_uri}/auth_end.html&state={"authId":"${req.query.authId}","method":"${req.query.oauthRedirectMethod}"}&client_id=${process.env.GOOGLE_CLIENTID}&response_type=code&access_type=offline&scope=email%20profile`)
});

// app.get('/authredirect', (req, res) => {
//   const { authId, method } = JSON.parse(req.query.state)
//   if (method === 'deeplink')
//     return res.redirect(`msteams://teams.microsoft.com/l/auth-callback?authId=${authId}&result=${req.query.code}`);
//   else
//     //return res.render('auth_end', { result: req.query.code });
//     res.redirect('auth_end.html');
// });

app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);

  setTimeout(() => {
    localtunnel(port, { subdomain }, onTunnelCreated);
  }, 1000);
});

