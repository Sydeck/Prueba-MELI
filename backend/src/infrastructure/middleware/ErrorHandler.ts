import { NextFunction, Request, Response } from 'express';
import { DomainException } from '@domain/exceptions';

export class ErrorHandler {
  static handle = (error: Error, req: Request, res: Response, next: NextFunction): void => {
    console.log('ErrorHandler', error);
    if (error instanceof DomainException) {
      // Reset status code
      res.status(error.httpStatus).json({
        error: {
          code: error.code,
          message: error.message,
          timestamp: new Date().toISOString(),
        },
      });
      return;
    }

    // Handle unexpected errors
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred',
        timestamp: new Date().toISOString(),
      },
    });
  };
}
