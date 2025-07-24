// tests/unit/domain/value-objects/SellerId.spec.ts
import { SellerId } from '@domain/value-objects/SellerId';
import { ValidationException } from '@domain/exceptions';

describe('SellerId', () => {
  it('should create a valid SellerId', () => {
    const id = new SellerId('12345');
    expect(id.value).toBe('12345');
  });

  it('should throw ValidationException for empty value', () => {
    expect(() => new SellerId('')).toThrow(ValidationException);
  });

  it('should throw ValidationException for non-numeric value', () => {
    expect(() => new SellerId('abc123')).toThrow(ValidationException);
  });
});
