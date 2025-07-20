import { ProductId } from '@domain/value-objects/ProductId';
import { ProductImage } from '@domain/value-objects/ProductImage';
import { ProductTitle } from '@domain/value-objects/ProductTitle';
import { ProductDescription } from '@domain/value-objects/ProductDescription';
import { Money } from '@domain/value-objects/Money';
import { Seller } from './Seller';
import { ShippingInfo } from '@domain/value-objects/ShippingInfo';
import { Availability } from '@domain/value-objects/Availability';
import { ValidationException } from '@domain/exceptions/ValidationException';

export class Product {
  constructor(
    private readonly _id: ProductId,
    private readonly _title: ProductTitle,
    private readonly _description: ProductDescription,
    private readonly _price: Money,
    private readonly _images: ProductImage[],
    private readonly _seller: Seller,
    private readonly _shipping: ShippingInfo,
    private readonly _availability: Availability
  ) {}

  /**
   * Get product id
   */
  get id(): ProductId {
    return this._id;
  }

  /**
   * Get product title
   */
  get title(): ProductTitle {
    return this._title;
  }

  /**
   * Get product description
   */
  get description(): ProductDescription {
    return this._description;
  }

  /**
   * Get product price
   */
  get price(): Money {
    return this._price;
  }

  /**
   * Get product images
   */
  get images(): ProductImage[] {
    return [...this._images];
  }

  /**
   * Get product seller
   */
  get seller(): Seller {
    return this._seller;
  }

  /**
   * Get product shipping info
   */
  get shipping(): ShippingInfo {
    return this._shipping;
  }

  /**
   * Get product availability
   */
  get availability(): Availability {
    return this._availability;
  }

  /**
   * Business logic: Check if product is available for purchase
   */
  public isAvailableForPurchase(quantity: number = 1): boolean {
    return this._availability.hasStock(quantity);
  }

  /**
   * Business logic: Check if product has free shipping
   */
  public hasFreeShipping(): boolean {
    return this._shipping.isFree;
  }

  /**
   * Business logic: Get primary image
   */
  public getPrimaryImage(): ProductImage | null {
    return this._images[0] ?? null;
  }

  /**
   * Business logic: Check if product is from a trusted seller
   */
  public isFromTrustedSeller(): boolean {
    return this._seller.isTrustworthy();
  }

  /**
   * Business logic: Calculate total cost of product
   */
  public calculateTotalCost(quantity: number = 1): Money {
    if (!this.isAvailableForPurchase) {
      throw new ValidationException(
        'Product not available for purchase',
        'PRODUCT_NOT_AVAILABLE',
        409
      );
    }
    const ProductCost = new Money(
      this._price.getDiscountAmount() * quantity,
      this._price.currency,
      0
    );
    if (this._shipping.isFree) {
      return ProductCost;
    }
    return new Money(ProductCost.amount + this.shipping.cost.amount, ProductCost.currency, 0);
  }

  /**
   * Entity equality based on ID
   */
  public equals(other: Product): boolean {
    return this._id.equals(other.id);
  }

  /**
   * Entity string representation
   */
  public toString(): string {
    return `${this._title.value} - ${this._price.formatForDisplay()}`;
  }
}
