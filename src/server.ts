/* eslint-disable no-console */
import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
