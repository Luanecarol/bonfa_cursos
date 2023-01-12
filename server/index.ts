import dotenv from 'dotenv';
import Express, { json } from 'express';
import path from 'path';
import 'reflect-metadata';
import routes from './src/routes';

const app = Express();
dotenv.config({
  path: path.resolve('.env'),
});
app.use(json());

app.use(routes);

app.listen(3001, () => {
  console.log('Running at port 3001');
});
