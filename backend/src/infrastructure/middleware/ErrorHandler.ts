import { NextFunction, Request, Response } from 'express';
import { ValidationException } from '@domain/exceptions/ValidationException';

export class ErrorHandler {
  static handle(err: Error, req: Request, res: Response, next: NextFunction): void {
    console.error('Error Ocurred', {
      message: err.message,
      stack: err.stack,
      timestamp: new Date().toISOString(),
      path: req.path,
      method: req.method,
      status: res.statusCode,
    });
    if (err instanceof ValidationException) {
      res.status(err.httpStatus).json({
        error: {
          code: err.code,
          message: err.message,
          timestamp: new Date().toISOString(),
        },
      });
    }
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred',
        timestamp: new Date().toISOString(),
      },
    });
  }
}
