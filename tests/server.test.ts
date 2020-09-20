import request from 'supertest';
import defaultRouter from '../src/routes/default.router';
import server from '../src/server';

describe('Health check', () => {
  it('has a valid route to check health status', () => {
    expect(defaultRouter).toBeDefined();
  });

  it('returns success to health check', async () => {
    const response = await request(server).get('/health');
    expect(response.status).toBe(200);
  });
});
