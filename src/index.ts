import 'source-map-support/register';
import { start } from './server';

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
