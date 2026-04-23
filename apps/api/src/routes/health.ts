import { Hono } from 'hono';
import type { HealthResponse } from '@focus/types';

const health = new Hono();

health.get('/health', (c) => {
  const response: HealthResponse = {
    status: 'ok',
    timestamp: new Date().toISOString(),
  };
  return c.json(response);
});

export default health;
