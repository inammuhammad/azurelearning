import express from 'express';
import {AppRouter} from './routes';
import cors from 'cors';
import { MongoProvider } from './server';
const app = express();
const port = process.env.PORT || 80;
app.use(express.json());

MongoProvider.init()
  .then(() => {
    console.log('DB CONNECTION - CONNECTED');
  })
  .catch(e => {
    console.log('DB CONNECTION - FAILED', e);
  });

app.use(cors());

app.get('/welcome', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', AppRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
