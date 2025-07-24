// tests/unit/domain/value-objects/SellerName.spec.ts
import { SellerName } from '../../../../src/domain/value-objects/SellerName';
import { ValidationException } from '../../../../src/domain/exceptions';

describe('SellerName', () => {
  it('should create a valid SellerName', () => {
    const name = new SellerName('Valid Store & Co.');
    expect(name.value).toBe('Valid Store & Co.');
  });

  it('should throw ValidationException for empty name', () => {
    expect(() => new SellerName('')).toThrow(ValidationException);
  });

  it('should throw ValidationException for too short name', () => {
    expect(() => new SellerName('AB')).toThrow(ValidationException);
  });

  it('should throw ValidationException for too long name', () => {
    const longName = 'A'.repeat(101);
    expect(() => new SellerName(longName)).toThrow(ValidationException);
  });

  it('should throw ValidationException for invalid characters', () => {
    expect(() => new SellerName('Invalid@Name!')).toThrow(ValidationException);
  });
});
