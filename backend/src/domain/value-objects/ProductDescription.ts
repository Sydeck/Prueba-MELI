import { ValidationException } from '../exceptions';
import { AbstractValueObject } from './AbstractValueObjects';
/**
 * Product description value object with length validation
 */

export class ProductDescription extends AbstractValueObject<string> {
  /**
   * Validate product description format
   */
  protected validate(value: string): void {
    if (!value || value.trim().length === 0) {
      throw new ValidationException(
        'Product description cannot be empty',
        'EMPTY_PRODUCT_DESCRIPTION'
      );
    }

    if (value.length < 10 || value.length > 5000) {
      throw new ValidationException(
        'Product description must be between 10 and 5000 characters',
        'INVALID_PRODUCT_DESCRIPTION_LENGTH'
      );
    }
  }
}
