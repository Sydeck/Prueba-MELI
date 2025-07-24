import { ProductImage } from '@domain/value-objects/ProductImage';
import { ValidationException } from '@domain/exceptions';

describe('ProductImage', () => {
  it('should create a valid ProductImage', () => {
    const image = new ProductImage('https://example.com/image.jpg');
    expect(image.url).toBe('https://example.com/image.jpg');
  });

  it('should throw ValidationException for empty URL', () => {
    expect(() => new ProductImage('')).toThrow(ValidationException);
  });

  it('should throw ValidationException for invalid URL', () => {
    expect(() => new ProductImage('not-a-url')).toThrow(ValidationException);
  });

  it('should throw ValidationException for unsupported extension', () => {
    expect(() => new ProductImage('https://example.com/file.txt')).toThrow(ValidationException);
  });
});
