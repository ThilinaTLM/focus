import { Hono } from 'hono';
import type { ApiStatusResponse } from '@focus/types';

const status = new Hono();

const startTime = Date.now();

status.get('/status', (c) => {
  const response: ApiStatusResponse = {
    version: '0.0.1',
    environment: process.env.NODE_ENV || 'development',
    uptime: Date.now() - startTime,
  };
  return c.json(response);
});

export default status;
