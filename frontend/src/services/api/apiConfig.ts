import { endpoints } from './endpoints';
/**
 * API configuration - Single source of truth for API endpoints
 */

export class ApiConfig {
  readonly baseURL: string;
  readonly timeout: number;
  readonly defaultHeaders: Record<string, string>;
  readonly retryConfig: RetryConfig;

  constructor() {
    this.baseURL = this.getBaseUrl();
    this.timeout = this.getTimeout();
    this.defaultHeaders = this.getDefaultHeaders();
    this.retryConfig = this.getRetryConfig();
  }

  /**
   * Get the base URL from environment variables or use a default value
   */
  private getBaseUrl(): string {
    const envUrl = process.env.NEXT_PUBLIC_API_URL;
    const defaultUrl = 'http://localhost:3001';
    if (!envUrl) {
      console.warn('No API URL found in environment variables. Using default URL.');
    }
    return envUrl || defaultUrl;
  }

  /**
   * Get the timeout from environment variables or use a default value
   */
  private getTimeout(): number {
    const envTimeout = process.env.NEXT_PUBLIC_API_TIMEOUT;
    const defaultTimeout = 10000;
    if (!envTimeout) {
      console.warn('No API timeout found in environment variables. Using default timeout.');
    }
    return envTimeout ? parseInt(envTimeout, 10) : defaultTimeout;
  }

  /**
   * Get the default headers for the API requests
   */
  private getDefaultHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // Add any other default headers here
    };
  }

  /**
   * Get the retry configuration for the API requests
   */
  private getRetryConfig(): RetryConfig {
    return {
      maxRetries: 3,
      baseDelay: 1000,
      maxDelay: 5000,
      backoffFactor: 2,
      retryableStatusCodes: [500, 502, 503, 504],
    };
  }

  /**
   * Get the endpoints for the API requests
   */
  get endpoints() {
    return endpoints;
  }

  /**
   * Build the URL for the API requests
   */
  buildEndpoint(template: string, params: Record<string, string | number> = {}): string {
    let endpoint = template;
    Object.entries(params).forEach(([key, value]) => {
      endpoint = endpoint.replace(`:${key}`, value.toString());
    });
    return endpoint;
  }
}

/**
 * Retry configuration for the API requests
 */
export interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  backoffFactor: number;
  retryableStatusCodes: number[];
}
