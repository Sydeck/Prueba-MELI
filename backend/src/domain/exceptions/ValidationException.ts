import { DomainException } from './DomainException';

export class ValidationException extends DomainException {
  constructor(
    message: string = 'Validation failed',
    public readonly code: string = 'VALIDATOR_ERROR',
    public readonly httpStatus: number = 400
  ) {
    super(message);
  }
}
