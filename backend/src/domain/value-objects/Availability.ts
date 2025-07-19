import { ValidationException } from '../exceptions';

/**
 * Availability VO with enum validation
 */
export class Availability {
  constructor(private readonly _stock: number, private readonly _isAvailable: boolean) {
    this.validate();
  }

  /**
   * Static constants for the shipping info
   */
  private static readonly AVAILABLE_TEXT = 'Disponible';
  private static readonly UNAVAILABLE_TEXT = 'No disponible';

  /**
   * Get the stock
   */
  get stock(): number {
    return this._stock;
  }

  /**
   * Get the availability status
   */
  get isAvailable(): boolean {
    return this._isAvailable;
  }

  /**
   * Validate the availability
   */
  private validate(): void {
    if (this._stock < 0) {
      throw new ValidationException('Stock cannot be negative', 'INVALID_AVAILABILITY_STOCK');
    }
  }

  /**
   * Check if the availability has stock
   */
  public hasStock(quantity: number = 1): boolean {
    return this._isAvailable && this._stock >= quantity;
  }

  /**
   * Check if the availability is equal to another availability (instance comparison)
   */
  public equals(other: Availability): boolean {
    return this._stock === other._stock && this._isAvailable === other._isAvailable;
  }

  public toString(): string {
    return this._isAvailable
      ? `${Availability.AVAILABLE_TEXT} (${this._stock})`
      : Availability.UNAVAILABLE_TEXT;
  }
}
