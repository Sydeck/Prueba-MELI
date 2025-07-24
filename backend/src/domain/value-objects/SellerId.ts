import { ValidationException } from '../exceptions';
import { AbstractValueObject } from './AbstractValueObjects';

/**
 * Seller ID VO with length validation
 */

export class SellerId extends AbstractValueObject<string> {
  /**
   * Validate seller ID format
   */
  protected validate(value: string): void {
    if (!value || value.trim().length === 0) {
      throw new ValidationException('Seller ID cannot be empty', 'EMPTY_SELLER_ID');
    }

    /**
     * Format validation
     * MercadoLibre seller ID are numeric strings
     */
    if (!/^\d+$/.test(value)) {
      throw new ValidationException('Seller ID must be a number', 'INVALID_SELLER_ID');
    }
  }
}
