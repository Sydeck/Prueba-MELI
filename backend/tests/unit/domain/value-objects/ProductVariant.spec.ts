import { ProductVariant } from '@domain/value-objects/ProductVariant';
import { ProductImage } from '@domain/value-objects/ProductImage';
import { ValidationException } from '@domain/exceptions';

describe('ProductVariant', () => {
  const validImages = [new ProductImage('https://example.com/img1.jpg')];

  it('should create a valid ProductVariant', () => {
    const variant = new ProductVariant({
      id: 'VAR123',
      color: 'Black',
      storage: '256GB',
      price: 499.99,
      images: validImages,
      stock: 10,
    });
    expect(variant.id).toBe('VAR123');
    expect(variant.images.length).toBe(1);
  });

  it('should throw ValidationException if id, color or storage are missing', () => {
    expect(
      () =>
        new ProductVariant({
          id: '',
          color: '',
          storage: '',
          price: 499.99,
          images: validImages,
          stock: 10,
        })
    ).toThrow(ValidationException);
  });

  it('should throw ValidationException if no images are provided', () => {
    expect(
      () =>
        new ProductVariant({
          id: 'VAR123',
          color: 'Black',
          storage: '256GB',
          price: 499.99,
          images: [],
          stock: 10,
        })
    ).toThrow(ValidationException);
  });

  it('should throw ValidationException if images are not ProductImage instances', () => {
    expect(
      () =>
        new ProductVariant({
          id: 'VAR123',
          color: 'Black',
          storage: '256GB',
          price: 499.99,
          images: ['not-an-image'] as any,
          stock: 10,
        })
    ).toThrow(ValidationException);
  });

  it('should throw ValidationException for invalid price or stock', () => {
    expect(
      () =>
        new ProductVariant({
          id: 'VAR123',
          color: 'Black',
          storage: '256GB',
          price: 0,
          images: validImages,
          stock: -1,
        })
    ).toThrow(ValidationException);
  });
});
