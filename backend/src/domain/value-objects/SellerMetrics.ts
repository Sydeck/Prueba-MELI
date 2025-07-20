import { ValidationException } from '../exceptions';

/**
 * SellerMetrics VO for seller metrics
 */

export class SellerMetrics {
  constructor(private readonly _totalProducts: number, private readonly _totalSales: number) {
    this.validate();
  }

  /**
   * Get the total products
   */
  get totalProducts(): number {
    return this._totalProducts;
  }

  /**
   * Get the total sales
   */
  get totalSales(): number {
    return this._totalSales;
  }

  /**
   * Validate the seller metrics
   */
  private validate(): void {
    if (this._totalProducts < 0) {
      throw new ValidationException(
        'Total products must be greater than 0',
        'INVALID_SELLER_METRICS'
      );
    }
    if (this._totalSales < 0) {
      throw new ValidationException(
        'Total sales must be greater than 0',
        'INVALID_SELLER_METRICS',
        500
      );
    }
  }

  /**
   * Get the formatted sales
   */
  public getFormattedSales(): string {
    if (this._totalSales === 0) {
      return 'No hay ventas';
    }
    if (this.totalSales > 1000000) {
      return `+${Math.floor(this._totalSales / 1000000)}M`;
    }
    if (this.totalSales > 1000) {
      return `+${Math.floor(this._totalSales / 1000)}mil`;
    }

    return `´+${this._totalSales}`;
  }

  /**
   * Get the formatted products
   */
  public getFormattedProducts(): string {
    if (this._totalProducts === 0) {
      return 'No hay productos';
    }
    return `+${this._totalProducts} Productos`;
  }

  /**
   * Check if the seller metrics are equal to the other seller metrics (instance comparison)
   */
  public equals(other: SellerMetrics): boolean {
    return this._totalProducts === other._totalProducts && this._totalSales === other._totalSales;
  }

  /**
   * Get the string representation of the seller metrics
   */
  public toString(): string {
    return `${this.getFormattedProducts()} - ${this.getFormattedSales()} ventas`;
  }
}
