/**
 * RFID Auth server, kiosk, and control panel
 *
 * @license The MIT License - http://opensource.org/licenses/MIT
 * @copyright (c) 2013 Hacker Lab Community
 */

var express = require('express')
  , admin = require('./routes/admin')
  , kiosk = require('./routes/kiosk')
  , api_10 = require('./routes/api-1.0')
  , http = require('http')
  , path = require('path')
  , cfg = require('./config');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || cfg["port"]);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(cfg["cookie secret"]));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function (req, res) {
  res.redirect('/kiosk');
});

app.get('/kiosk', kiosk.home);
app.get('/admin', admin.home);

http.createServer(app).listen(app.get('port'), function(){
  console.log("RFID server listening on port " + app.get('port'));
});
