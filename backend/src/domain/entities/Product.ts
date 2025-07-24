import { ProductId } from '@domain/value-objects/ProductId';
import { ProductImage } from '@domain/value-objects/ProductImage';
import { ProductTitle } from '@domain/value-objects/ProductTitle';
import { ProductDescription } from '@domain/value-objects/ProductDescription';
import { Money } from '@domain/value-objects/Money';
import { Seller } from './Seller';
import { ShippingInfo } from '@domain/value-objects/ShippingInfo';
import { Availability } from '@domain/value-objects/Availability';
import { ProductCondition } from '@domain/value-objects/ProductCondition';
import { ProductRating } from '@domain/value-objects/ProductRating';
import { ProductSpecs } from '@domain/value-objects/ProductSpecs';
import { ProductVariant } from '@domain/value-objects/ProductVariant';
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
    private readonly _availability: Availability,
    private readonly _condition: ProductCondition,
    private readonly _rating: ProductRating,
    private readonly _reviews: number,
    private readonly _facts: string[],
    private readonly _specs: ProductSpecs[],
    private readonly _variants: ProductVariant[]
  ) {
    if (_reviews < 0) {
      throw new ValidationException('Reviews must be zero or positive', 'INVALID_PRODUCT_REVIEWS');
    }
  }

  /** Getters */
  get id(): ProductId {
    return this._id;
  }

  get title(): ProductTitle {
    return this._title;
  }

  get description(): ProductDescription {
    return this._description;
  }

  get price(): Money {
    return this._price;
  }

  get images(): ProductImage[] {
    return [...this._images];
  }

  get seller(): Seller {
    return this._seller;
  }

  get shipping(): ShippingInfo {
    return this._shipping;
  }

  get availability(): Availability {
    return this._availability;
  }

  get condition(): ProductCondition {
    return this._condition;
  }

  get rating(): ProductRating {
    return this._rating;
  }

  get reviews(): number {
    return this._reviews;
  }

  get facts(): string[] {
    return [...this._facts];
  }

  get specs(): ProductSpecs[] {
    return [...this._specs];
  }

  get variants(): ProductVariant[] {
    return [...this._variants];
  }

  /** Business logic */
  public isAvailableForPurchase(quantity: number = 1): boolean {
    return this._availability.hasStock(quantity);
  }

  public hasFreeShipping(): boolean {
    return this._shipping.isFree;
  }

  public getPrimaryImage(): ProductImage | null {
    return this._images[0] ?? null;
  }

  public isFromTrustedSeller(): boolean {
    return this._seller.isTrustworthy();
  }

  public calculateTotalCost(quantity: number = 1): Money {
    if (!this.isAvailableForPurchase(quantity)) {
      throw new ValidationException(
        'Product not available for purchase',
        'PRODUCT_NOT_AVAILABLE',
        409
      );
    }

    const productCost = new Money(
      this._price.getDiscountAmount() * quantity,
      this._price.currency,
      0
    );

    if (this._shipping.isFree) {
      return productCost;
    }

    return new Money(productCost.amount + this.shipping.cost.amount, productCost.currency, 0);
  }

  /** Equality */
  public equals(other: Product): boolean {
    return this._id.equals(other.id);
  }

  /** String representation */
  public toString(): string {
    return `${this._title.value} - ${this._price.formatForDisplay()}`;
  }
}
