// src/services/errors/errorPatterns.ts

export interface IErrorPattern {
  keywords: string[];
  message: string;
}

export const ERROR_PATTERNS: IErrorPattern[] = [
  // Validation errors (check first - most specific)
  {
    keywords: ['product Id', 'required', 'validation', 'must be', 'invalid'],
    message: 'Please provide a valid product ID',
  },

  // Not found errors
  {
    keywords: ['404', 'not found'],
    message: 'Product not found',
  },

  // Network errors
  {
    keywords: ['network', 'connection', 'fetch', 'failed'],
    message: 'Unable to connect to server. Please check your connection and try again.',
  },

  // Timeout errors
  {
    keywords: ['timeout', 'timed out'],
    message: 'Request timed out. Please try again.',
  },

  // Server errors
  {
    keywords: ['500', 'server error', 'internal error'],
    message: 'Server is experiencing issues. Please try again later.',
  },

  // Health check errors
  {
    keywords: ['health check'],
    message: 'Service is currently unavailable. Please try again later.',
  },
];

export const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Please try again.';
