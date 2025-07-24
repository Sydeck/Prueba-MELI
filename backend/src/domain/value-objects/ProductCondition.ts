import { AbstractValueObject } from './AbstractValueObjects';
import { ValidationException } from '../exceptions';

export class ProductCondition extends AbstractValueObject<string> {
  protected validate(value: string): void {
    if (!value || value.trim().length === 0) {
      throw new ValidationException('Product condition cannot be empty', 'EMPTY_PRODUCT_CONDITION');
    }

    if (!['Nuevo', 'Usado'].includes(value)) {
      throw new ValidationException('Invalid product condition', 'INVALID_PRODUCT_CONDITION');
    }
  }
}
