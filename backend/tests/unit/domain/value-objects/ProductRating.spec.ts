import { ProductRating } from '@domain/value-objects/ProductRating';
import { ValidationException } from '@domain/exceptions';

describe('ProductRating', () => {
  it('should create a valid rating', () => {
    const rating = new ProductRating(4.5);
    expect(rating.value).toBe(4.5);
  });

  it('should throw ValidationException for rating below 0', () => {
    expect(() => new ProductRating(-1)).toThrow(ValidationException);
  });

  it('should throw ValidationException for rating above 5', () => {
    expect(() => new ProductRating(6)).toThrow(ValidationException);
  });
});
