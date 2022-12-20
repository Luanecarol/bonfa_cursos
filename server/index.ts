import Express, { json } from 'express';
import routes from './src/routes';

const app = Express();
console.log(process.env.NODE_ENV);
app.use(json());

app.use(routes);

app.listen(3001, () => {
  console.log('Running at port 3001');
});
