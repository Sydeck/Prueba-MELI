import { ValidationException } from '../exceptions';
import { AbstractValueObject } from './AbstractValueObjects';

/**
 * SellerName VO for seller name
 */
export class SellerName extends AbstractValueObject<string> {
  protected validate(value: string): void {
    if (!value || value.trim().length === 0) {
      throw new ValidationException('Seller name cannot be empty', 'EMPTY_SELLER_NAME');
    }

    if (value.length < 3 || value.length > 100) {
      throw new ValidationException(
        'Seller name must be between 3 and 100 characters',
        'INVALID_SELLER_NAME_LENGTH'
      );
    }

    if (!/^[a-zA-Z\s]+$/.test(value)) {
      throw new ValidationException(
        'Seller name must contain only letters and spaces',
        'INVALID_SELLER_NAME_FORMAT'
      );
    }
  }
}
