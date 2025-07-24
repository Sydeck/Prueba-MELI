import { ProductId } from '../../../../src/domain/value-objects/ProductId';
import { ValidationException } from '../../../../src/domain/exceptions/ValidationException';

describe('ProductId', () => {
  it('should create a valid ProductId', () => {
    const productId = new ProductId('MLA123456');
    expect(productId.value).toBe('MLA123456');
  });

  it('should throw ValidationException for empty ProductId', () => {
    expect(() => new ProductId('')).toThrow(ValidationException);
  });

  it('should throw ValidationException for invalid format', () => {
    expect(() => new ProductId('123456')).toThrow(ValidationException);
    expect(() => new ProductId('ML123456')).toThrow(ValidationException);
    expect(() => new ProductId('MLA')).toThrow(ValidationException);
  });
});
