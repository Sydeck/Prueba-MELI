import { AbstractValueObject } from './AbstractValueObjects';
import { ValidationException } from '../exceptions';

export class ProductVariant extends AbstractValueObject<{
  id: string;
  color: string;
  storage: string;
  price: number;
  image: string;
  stock: number;
}> {
  protected validate(value: {
    id: string;
    color: string;
    storage: string;
    price: number;
    image: string;
    stock: number;
  }): void {
    if (!value.id) throw new ValidationException('Variant ID is required', 'INVALID_VARIANT_ID');
    if (!value.color)
      throw new ValidationException('Variant color is required', 'INVALID_VARIANT_COLOR');
    if (!value.storage)
      throw new ValidationException('Variant storage is required', 'INVALID_VARIANT_STORAGE');
    if (value.price <= 0)
      throw new ValidationException('Variant price must be positive', 'INVALID_VARIANT_PRICE');
    if (!value.image)
      throw new ValidationException('Variant image is required', 'INVALID_VARIANT_IMAGE');
    if (value.stock < 0)
      throw new ValidationException('Variant stock cannot be negative', 'INVALID_VARIANT_STOCK');
  }

  get variantId(): string {
    return this._value.id;
  }

  get variantColor(): string {
    return this._value.color;
  }

  get variantStorage(): string {
    return this._value.storage;
  }

  get variantPrice(): number {
    return this._value.price;
  }

  get variantImage(): string {
    return this._value.image;
  }

  get variantStock(): number {
    return this._value.stock;
  }
}
