import { Money } from './Money';

export class ShippingInfo {
  constructor(
    public readonly _cost: Money,
    public readonly _isFree: boolean,
    private readonly _estimatedDeliveryDays: number
  ) {}

  /**
   * Static constants for the shipping info
   */
  private static readonly FREE_SHIPPING_TEXT = 'Envío gratis';
  private static readonly PAID_SHIPPING_PREFIX = 'Envío: ';
  /**
   * Get the cost of the shipping
   */
  get cost(): Money {
    return this._cost;
  }

  /**
   * Check if the shipping is free
   */
  get isFree(): boolean {
    return this._isFree;
  }

  /**
   * Get the estimated delivery days
   */
  get estimatedDeliveryDays(): number {
    return this._estimatedDeliveryDays;
  }

  /**
   * Check if the shipping info is equal to another shipping info (instance comparison)
   */
  public equals(other: ShippingInfo): boolean {
    return (
      this._cost.equals(other._cost) &&
      this._isFree === other._isFree &&
      this._estimatedDeliveryDays === other._estimatedDeliveryDays
    );
  }

  /**
   * Return a string representation of the shipping info
   */
  public toString(): string {
    return this._isFree
      ? ShippingInfo.FREE_SHIPPING_TEXT
      : `${ShippingInfo.PAID_SHIPPING_PREFIX}${this._cost.formatForDisplay()}`;
  }
}
