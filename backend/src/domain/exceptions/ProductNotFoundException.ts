import { DomainException } from './DomainException';

/**
 * Exception for when a product is not found in the repository
 * Maps to HTTP 404 Not Found
 */
export class ProductNotFoundException extends DomainException {
  readonly code = 'PRODUCT_NOT_FOUND';
  readonly httpStatus = 404;

  constructor(message: string = 'Product not found') {
    super(message);
  }
}
