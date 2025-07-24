import { AbstractValueObject } from './AbstractValueObjects';
import { ValidationException } from '../exceptions/ValidationException';
import { ProductImage } from './ProductImage';

export class ProductVariant extends AbstractValueObject<{
  id: string;
  color: string;
  storage: string;
  price: number;
  images: ProductImage[];
  stock: number;
}> {
  constructor(value: {
    id: string;
    color: string;
    storage: string;
    price: number;
    images: ProductImage[];
    stock: number;
  }) {
    super(value);
  }

  get id(): string {
    return this._value.id;
  }

  get color(): string {
    return this._value.color;
  }

  get storage(): string {
    return this._value.storage;
  }

  get price(): number {
    return this._value.price;
  }

  get images(): ProductImage[] {
    return this._value.images;
  }

  get stock(): number {
    return this._value.stock;
  }

  protected validate(value: {
    id: string;
    color: string;
    storage: string;
    price: number;
    images: ProductImage[];
    stock: number;
  }): void {
    if (!value.id || !value.color || !value.storage) {
      throw new ValidationException('Invalid product variant', 'INVALID_PRODUCT_VARIANT');
    }

    if (!Array.isArray(value.images) || value.images.length === 0) {
      throw new ValidationException(
        'Product variant must have at least one image',
        'INVALID_IMAGES'
      );
    }

    if (!value.images.every(img => img instanceof ProductImage)) {
      throw new ValidationException(
        'Each image must be a ProductImage instance',
        'INVALID_IMAGE_TYPE'
      );
    }

    if (value.price <= 0 || value.stock < 0) {
      throw new ValidationException('Invalid price or stock for variant', 'INVALID_VARIANT_DATA');
    }
  }
}
