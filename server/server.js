import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello world');
});

const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`app listening on port ${3000}`));
