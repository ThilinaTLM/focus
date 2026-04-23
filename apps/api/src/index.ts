import { serve } from '@hono/node-server';
import app from './app.js';
import { apiConfig } from '@focus/config';

serve({
  fetch: app.fetch,
  port: apiConfig.port,
});

console.log(`🚀 API server running at http://localhost:${apiConfig.port}`);
