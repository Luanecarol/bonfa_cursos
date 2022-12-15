import Express, { json } from 'express';

const app = Express();

app.use(json());

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello World',
  });
});

app.listen(3001, () => {
  console.log('Running at port 3001');
});
