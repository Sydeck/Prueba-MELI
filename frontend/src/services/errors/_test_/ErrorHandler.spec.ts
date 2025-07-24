import { ErrorHandler } from '../ErrorHandler';
import { ERROR_PATTERNS, DEFAULT_ERROR_MESSAGE } from '../errorPatterns';

describe('ErrorHandler', () => {
  beforeEach(() => {
    // Restaurar los patrones originales antes de cada test
    while (ERROR_PATTERNS.length > 6) {
      ERROR_PATTERNS.shift();
    }
  });

  describe('transformError', () => {
    it('should return a user-friendly message when a keyword matches', () => {
      const error = new Error('404 not found');
      const result = ErrorHandler.transformError(error);
      expect(result.message).toBe('Product not found');
    });

    it('should return the default error message if no keywords match', () => {
      const error = new Error('Some unknown error');
      const result = ErrorHandler.transformError(error);
      expect(result.message).toBe(DEFAULT_ERROR_MESSAGE);
    });

    it('should return a generic error when input is not an Error instance', () => {
      const result = ErrorHandler.transformError('string error');
      expect(result.message).toBe('An unexpected error occurred');
    });

    it('should log context if provided', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      const error = new Error('404 not found');
      ErrorHandler.transformError(error, 'Product Service');
      expect(consoleSpy).toHaveBeenCalledWith('[Product Service] Error occurred:', error);
      consoleSpy.mockRestore();
    });
  });

  describe('specialized handlers', () => {
    it('handleProductError should call transformError with context', () => {
      const spy = jest.spyOn(ErrorHandler, 'transformError');
      const error = new Error('network error');
      ErrorHandler.handleProductError(error);
      expect(spy).toHaveBeenCalledWith(error, 'Product Service');
    });

    it('handleApiError should call transformError with context', () => {
      const spy = jest.spyOn(ErrorHandler, 'transformError');
      const error = new Error('network error');
      ErrorHandler.handleApiError(error);
      expect(spy).toHaveBeenCalledWith(error, 'API Service');
    });

    it('handleValidatorError should call transformError with context', () => {
      const spy = jest.spyOn(ErrorHandler, 'transformError');
      const error = new Error('validation failed');
      ErrorHandler.handleValidatorError(error);
      expect(spy).toHaveBeenCalledWith(error, 'Validator');
    });
  });

  describe('addErrorPattern', () => {
    it('should add a new error pattern at the beginning of the list', () => {
      ErrorHandler.addErrorPattern(['custom'], 'Custom error message');
      const error = new Error('custom');
      const result = ErrorHandler.transformError(error);
      expect(result.message).toBe('Custom error message');
      // Debe estar al inicio del array
      expect(ERROR_PATTERNS[0].message).toBe('Custom error message');
    });
  });
});
