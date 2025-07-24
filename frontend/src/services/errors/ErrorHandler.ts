import { ERROR_PATTERNS, DEFAULT_ERROR_MESSAGE, type IErrorPattern } from './errorPatterns';

export class ErrorHandler {
  private static readonly DEFAULT_MESSAGE = 'Something went wrong. Please try again.';

  /**
   * Transform the error into a user-friendly error
   */
  static transformError(error: unknown, context?: string): globalThis.Error {
    if (context) {
      console.log(`[${context}] Error occurred:`, error);
    }
    if (error instanceof globalThis.Error) {
      const errorMessage = error.message.toLowerCase();
      const matchPattern = ERROR_PATTERNS.find(pattern =>
        pattern.keywords.some(keyword => errorMessage.includes(keyword))
      );
      const userMessage = matchPattern?.message || DEFAULT_ERROR_MESSAGE;
      return new globalThis.Error(userMessage);
    }
    return new globalThis.Error('An unexpected error occurred');
  }

  /**
   * Handle product error
   */
  static handleProductError(error: unknown): globalThis.Error {
    return this.transformError(error, 'Product Service');
  }

  /**
   * Handle API error
   */
  static handleApiError(error: unknown): globalThis.Error {
    return this.transformError(error, 'API Service');
  }

  /**
   * Handle validator error
   */
  static handleValidatorError(error: unknown): globalThis.Error {
    return this.transformError(error, 'Validator');
  }

  /**
   * Add a new error pattern
   */
  static addErrorPattern(keywords: string[], message: string): void {
    ERROR_PATTERNS.unshift({ keywords, message });
  }
}
