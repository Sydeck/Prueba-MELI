// services/api/_test_/apiConfig.spec.ts
import { ApiConfig } from '../apiConfig';

describe('ApiConfig', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV }; // Clonamos las env originales
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restauramos las env originales
  });

  it('should use default values when no env variables are set', () => {
    delete process.env.NEXT_PUBLIC_API_URL;
    delete process.env.NEXT_PUBLIC_API_TIMEOUT;

    const config = new ApiConfig();

    expect(config.baseURL).toBe('http://localhost:3001');
    expect(config.timeout).toBe(10000);
    expect(config.defaultHeaders).toEqual({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    expect(config.retryConfig).toEqual({
      maxRetries: 3,
      baseDelay: 1000,
      maxDelay: 5000,
      backoffFactor: 2,
      retryableStatusCodes: [500, 502, 503, 504],
    });
  });

  it('should use environment variables when set', () => {
    process.env.NEXT_PUBLIC_API_URL = 'https://api.example.com';
    process.env.NEXT_PUBLIC_API_TIMEOUT = '20000';

    const config = new ApiConfig();

    expect(config.baseURL).toBe('https://api.example.com');
    expect(config.timeout).toBe(20000);
  });

  it('should build endpoints with parameters', () => {
    const config = new ApiConfig();
    const url = config.buildEndpoint('/api/v1/products/:id', { id: 123 });
    expect(url).toBe('/api/v1/products/123');
  });
});
