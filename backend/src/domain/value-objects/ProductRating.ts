import { AbstractValueObject } from './AbstractValueObjects';
import { ValidationException } from '../exceptions';

export class ProductRating extends AbstractValueObject<number> {
  protected validate(value: number): void {
    if (value < 0 || value > 5) {
      throw new ValidationException(
        'Product rating must be between 0 and 5',
        'INVALID_PRODUCT_RATING'
      );
    }
  }
}
