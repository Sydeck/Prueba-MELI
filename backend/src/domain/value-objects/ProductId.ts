import { ValidationException } from '../exceptions';
import { AbstractValueObject } from './AbstractValueObjects';
/**
 * ProductId VO for MercadoLibre
 * Enforces ML validation (ej. MLM50911552)
 */
export class ProductId extends AbstractValueObject<string> {
  /**
   * Validate ProductId format
   * pattern ML + Country Code [ M = MEX] + numbers
   */
  protected validate(value: string) {
    if (!value || value.trim().length === 0) {
      throw new ValidationException('Product ID cannot be empty', 'EMPTY_PRODUCT_ID');
    }

    const pattern = /^ML[A-Z]\d+$/;
    if (!pattern.test(value)) {
      throw new ValidationException('Invalid product ID format', 'INVALID_PRODUCT_ID_FORMAT');
    }
  }
}
