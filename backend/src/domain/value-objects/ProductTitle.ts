import { ValidationException } from '../exceptions';
import { AbstractValueObject } from './AbstractValueObjects';

/**
 * Product title VO with length validation
 */
export class ProductTitle extends AbstractValueObject<string> {
  //optionally validate if the title is too long
  protected validate(value: string): void {
    if (value.length < 3 || value.length > 100) {
      throw new ValidationException(
        'Product title must be between 3 and 100 characters',
        'INVALID_PRODUCT_TITLE_LENGTH'
      );
    }

    //optionally validate if the title is too long
    if (value.trim().length > 255) {
      throw new ValidationException(
        'Product title must be less than 255 characters',
        'INVALID_PRODUCT_TITLE_LENGTH'
      );
    }
  }
}
