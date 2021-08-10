var express = require('express');
var serveStatic = require('serve-static');
var lt = require('localtunnel');

var subdomain = 'lnan-test1';
var restartingTunnel = false;

var onTunnelCreated = (err, tunnel) => {
  if (err) {
    console.log("Error while creating tunnel: " + err);
    readline.keyInPause("\nProgram ended...")
    process.exit();
  }

  console.log("Tunnel started with url: " + tunnel.url + " on port: " + port);
  restartingTunnel = false;
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

var port = process.env.port || 3000;
app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);

  setTimeout(() => {
    var tunnel = lt(port, { subdomain }, onTunnelCreated);
    tunnel.on('close', () => {
      console.log("Tunnel closed!");
      readline.keyInPause("\nProgram ended...")
      process.exit();
    });
    tunnel.on('error', () => {
      if (restartingTunnel) return;
      restartingTunnel = true;
      console.log("Restarting tunnel...");
      tunnel = lt(port, { subdomain }, onTunnelCreated);
    });
  }, 1000);
});

