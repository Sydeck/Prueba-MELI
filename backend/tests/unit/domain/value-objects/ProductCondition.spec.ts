import { ProductCondition } from '../../../../src/domain/value-objects/ProductCondition';
import { ValidationException } from '../../../../src/domain/exceptions';

describe('ProductCondition', () => {
  it('should create a valid ProductCondition', () => {
    const condition = new ProductCondition('Nuevo');
    expect(condition.value).toBe('Nuevo');
  });

  it('should throw ValidationException for empty value', () => {
    expect(() => new ProductCondition('')).toThrow(ValidationException);
  });

  it('should throw ValidationException for invalid condition', () => {
    expect(() => new ProductCondition('Defectuoso')).toThrow(ValidationException);
  });
});
