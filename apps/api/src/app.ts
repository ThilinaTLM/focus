import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { requestLogger } from './middleware/logger.js';
import health from './routes/health.js';
import status from './routes/v1/status.js';
import { apiConfig } from '@focus/config';

const app = new Hono();

app.use(
  cors({
    origin: apiConfig.corsOrigin,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(requestLogger);

app.route('/', health);
app.route('/api/v1', status);

export default app;
