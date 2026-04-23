import type { HealthResponse } from '@focus/types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function getHealth(): Promise<HealthResponse> {
  const res = await fetch(`${API_URL}/health`);
  if (!res.ok) {
    throw new Error(`Health check failed: ${res.status}`);
  }
  return res.json();
}
