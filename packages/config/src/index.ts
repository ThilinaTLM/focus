export function getEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getIntEnv(name: string, fallback?: number): number {
  const raw = getEnv(name, fallback?.toString());
  const parsed = parseInt(raw, 10);
  if (Number.isNaN(parsed)) {
    throw new Error(`Invalid integer environment variable: ${name}`);
  }
  return parsed;
}

export const apiConfig = {
  port: getIntEnv('API_PORT', 3001),
  env: getEnv('NODE_ENV', 'development'),
  corsOrigin: getEnv('CORS_ORIGIN', 'http://localhost:5173'),
} as const;

export const webConfig = {
  apiUrl: getEnv('VITE_API_URL', 'http://localhost:3001'),
} as const;
