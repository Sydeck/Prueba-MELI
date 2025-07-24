import { ProductDescription } from '@domain/value-objects/ProductDescription';
import { ValidationException } from '@domain/exceptions';

describe('ProductDescription', () => {
  it('should create a valid ProductDescription', () => {
    const description = new ProductDescription('This is a valid product description.');
    expect(description.value).toBe('This is a valid product description.');
  });

  it('should throw ValidationException for empty description', () => {
    expect(() => new ProductDescription('')).toThrow(ValidationException);
  });

  it('should throw ValidationException for too short description', () => {
    expect(() => new ProductDescription('Short')).toThrow(ValidationException);
  });

  it('should throw ValidationException for too long description', () => {
    const longText = 'A'.repeat(6000);
    expect(() => new ProductDescription(longText)).toThrow(ValidationException);
  });
});
