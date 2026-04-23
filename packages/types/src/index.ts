export interface HealthResponse {
  status: 'ok';
  timestamp: string;
}

export interface ApiStatusResponse {
  version: string;
  environment: string;
  uptime: number;
}
