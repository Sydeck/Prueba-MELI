/**
 * Base class for all domain exceptions
 */
export abstract class DomainException extends Error {
  abstract readonly code: string;
  abstract readonly codeStatus: string;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
