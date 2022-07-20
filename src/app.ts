import express from 'express';
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello World 2!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
