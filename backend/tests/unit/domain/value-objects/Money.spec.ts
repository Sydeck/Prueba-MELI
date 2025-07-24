import { Money } from '@domain/value-objects/Money';
import { ValidationException } from '@domain/exceptions';

describe('Money', () => {
  it('should create a valid Money instance', () => {
    const money = new Money(100, 'USD', 10);
    expect(money.amount).toBe(100);
    expect(money.currency).toBe('USD');
    expect(money.discount).toBe(10);
  });

  it('should throw ValidationException for negative amount', () => {
    expect(() => new Money(-50, 'USD', 0)).toThrow(ValidationException);
  });

  it('should throw ValidationException for invalid currency', () => {
    expect(() => new Money(100, '' as unknown as 'USD', 0)).toThrow(ValidationException);
  });

  it('should throw ValidationException for discount out of range', () => {
    expect(() => new Money(100, 'USD', 150)).toThrow(ValidationException);
    expect(() => new Money(100, 'USD', -10)).toThrow(ValidationException);
  });

  it('should calculate discounted amount correctly', () => {
    const money = new Money(200, 'USD', 25);
    expect(money.getDiscountAmount()).toBe(150);
  });

  it('should apply discount and return a new Money instance', () => {
    const money = new Money(200, 'USD', 0);
    const discounted = money.applyDiscount(20);
    expect(discounted.amount).toBe(160);
    expect(discounted.discount).toBe(20);
    expect(discounted.currency).toBe('USD');
  });

  it('should format amount for display', () => {
    const money = new Money(1234.56, 'USD', 0);
    expect(money.formatForDisplay()).toContain('$');
  });

  it('should compare equality between two Money instances', () => {
    const m1 = new Money(100, 'USD', 10);
    const m2 = new Money(100, 'USD', 10);
    const m3 = new Money(200, 'USD', 0);
    expect(m1.equals(m2)).toBe(true);
    expect(m1.equals(m3)).toBe(false);
  });
});
