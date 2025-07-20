import { DomainException } from './DomainException';

export class ValidationException extends DomainException {
  readonly httpStatus = 404;

  constructor(
    message: string = 'Validation failed',
    public readonly code: string = 'VALIDATOR_ERROR'
  ) {
    super(message);
  }
}
