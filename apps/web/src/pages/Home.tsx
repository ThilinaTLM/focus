import { useEffect, useState } from 'react';
import { getHealth } from '../lib/api';
import type { HealthResponse } from '@focus/types';

export default function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHealth()
      .then((data) => {
        setHealth(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600">Welcome to Focus.</p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-medium text-gray-900">API Health</h2>
        <div className="mt-3">
          {loading && <p className="text-sm text-gray-500">Checking...</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
          {health && (
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-medium text-gray-700">Status:</span>{' '}
                <span className="text-green-600">{health.status}</span>
              </p>
              <p>
                <span className="font-medium text-gray-700">Timestamp:</span>{' '}
                {health.timestamp}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
