import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';

const app = express();
const { Pool, Client } = require('pg');

const pool = new Pool(config);

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

const client = new Client(config);
client.connect();

client.query('SELECT NOW()', (err, res) => {
  if (err) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to db');
  client.end();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello world');
});

const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`app listening on port ${3000}`));
