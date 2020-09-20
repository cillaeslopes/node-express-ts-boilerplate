import defaultRouter from '../src/routes/default.router';

describe('Health check', () => {
  it('has a valid route to check health status', () => {
    expect(defaultRouter).toBeDefined();
  });
});
