'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var _require = require('pg'),
    Pool = _require.Pool,
    Client = _require.Client;

var pool = new Pool(_config2.default);

pool.query('SELECT NOW()', function (err, res) {
  console.log(err, res);
  pool.end();
});

var client = new Client(_config2.default);
client.connect();

client.query('SELECT NOW()', function (err, res) {
  if (err) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to db');
  client.end();
});

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send('hello world');
});

var port = 3000 || process.env.PORT;
app.listen(port, function () {
  return console.log('app listening on port ' + 3000);
});