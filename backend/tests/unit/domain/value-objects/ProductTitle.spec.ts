// tests/unit/domain/value-objects/ProductTitle.spec.ts
import { ProductTitle } from '../../../../src/domain/value-objects/ProductTitle';
import { ValidationException } from '../../../../src/domain/exceptions';

describe('ProductTitle', () => {
  it('should create a valid ProductTitle', () => {
    const title = new ProductTitle('Valid Product');
    expect(title.value).toBe('Valid Product');
  });

  it('should throw ValidationException for empty title', () => {
    expect(() => new ProductTitle('')).toThrow(ValidationException);
  });

  it('should throw ValidationException for title shorter than 3 characters', () => {
    expect(() => new ProductTitle('AB')).toThrow(ValidationException);
  });

  it('should throw ValidationException for title longer than 100 characters', () => {
    const longTitle = 'A'.repeat(101);
    expect(() => new ProductTitle(longTitle)).toThrow(ValidationException);
  });

  it('should consider two titles with the same value as equal', () => {
    const t1 = new ProductTitle('Same Title');
    const t2 = new ProductTitle('Same Title');
    expect(t1.equals(t2)).toBe(true);
  });
});
