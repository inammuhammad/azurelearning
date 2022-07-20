import express from 'express';
import {AppRouter} from './routes';
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', AppRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
