import { ProductSpecs } from '@domain/value-objects/ProductSpecs';
import { ValidationException } from '@domain/exceptions';

describe('ProductSpecs', () => {
  it('should create a valid ProductSpecs instance', () => {
    const spec = new ProductSpecs({ label: 'RAM', value: '8GB' });
    expect(spec.label).toBe('RAM');
    expect(spec.specValue).toBe('8GB');
  });

  it('should throw ValidationException for empty label', () => {
    expect(() => new ProductSpecs({ label: '', value: '8GB' })).toThrow(ValidationException);
  });

  it('should throw ValidationException for empty value', () => {
    expect(() => new ProductSpecs({ label: 'RAM', value: '' })).toThrow(ValidationException);
  });

  it('should throw ValidationException for whitespace-only label or value', () => {
    expect(() => new ProductSpecs({ label: '   ', value: '8GB' })).toThrow(ValidationException);
    expect(() => new ProductSpecs({ label: 'RAM', value: '   ' })).toThrow(ValidationException);
  });
});
