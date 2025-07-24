import { SellerId } from '@domain/value-objects/SellerId';
import { SellerName } from '@domain/value-objects/SellerName';
import { SellerStatus } from '@domain/value-objects/SellerStatus';
import { SellerMetrics } from '@domain/value-objects/SellerMetrics';
import { SellerReputation } from '@domain/value-objects/SellerReputation';

/**
 * Seller entity represents a MercadoLibre seller
 */

export class Seller {
  constructor(
    private readonly _id: SellerId,
    private readonly _name: SellerName,
    private readonly _status: SellerStatus,
    private readonly _metrics: SellerMetrics,
    private readonly _reputation: SellerReputation,
    private readonly _brandLogo: string
  ) {}

  /**
   * Get seller id
   */
  get id(): SellerId {
    return this._id;
  }

  /**
   * Get seller name
   */
  get name(): SellerName {
    return this._name;
  }

  /**
   * Get seller status
   */
  get status(): SellerStatus {
    return this._status;
  }

  /**
   * Get seller reputation
   */
  get reputation(): SellerReputation {
    return this._reputation;
  }

  /**
   * Get seller metrics
   */
  get metrics(): SellerMetrics {
    return this._metrics;
  }

  get brandLogo(): string {
    return this._brandLogo;
  }

  /**
   * Business logic: Check if seller is trustworthy
   */
  public isTrustworthy(): boolean {
    return this._reputation.isExcellent() || this._status.is('PLATINUM');
  }

  /**
   * Business logic: Check if seller is an official store
   */
  public isOfficialStore(): boolean {
    return this._status.is('TIENDA_OFICIAL');
  }

  /**
   * Business logic: Get seller display info
   */
  public getDisplayInfo(): String {
    const statusText = this._status.getDisplayText();
    const description = this._status.getDescription();

    return description ? `${statusText} - ${description}` : statusText;
  }

  /**
   * Entity equality based on ID
   */
  public equals(other: Seller): boolean {
    return this._id.equals(other._id);
  }

  /**
   * Entity string representation
   */
  public toString(): string {
    return `${this._name.value} (${this._status.getDisplayText()})`;
  }
}
