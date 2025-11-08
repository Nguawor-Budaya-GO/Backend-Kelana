import express from 'express';
import bodyParser from 'body-parser';
import apiV1Routes from './api/v1/routes/index';
import { PORT } from './config';

export function createServer() {
  const app = express();
  app.use(bodyParser.json());

  app.use('/api/v1', apiV1Routes);

  app.get('/', (_req, res) => res.send('Budayago backend')); 

  return app;
}

export async function start() {
  const app = createServer();
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}
