// tests/unit/domain/value-objects/SellerMetrics.spec.ts
import { SellerMetrics } from '../../../../src/domain/value-objects/SellerMetrics';
import { ValidationException } from '../../../../src/domain/exceptions';

describe('SellerMetrics', () => {
  it('should create a valid SellerMetrics', () => {
    const metrics = new SellerMetrics(100, 5000);
    expect(metrics.totalProducts).toBe(100);
    expect(metrics.totalSales).toBe(5000);
  });

  it('should throw ValidationException for negative products', () => {
    expect(() => new SellerMetrics(-1, 100)).toThrow(ValidationException);
  });

  it('should throw ValidationException for negative sales', () => {
    expect(() => new SellerMetrics(10, -5)).toThrow(ValidationException);
  });

  it('should format sales correctly', () => {
    expect(new SellerMetrics(10, 0).getFormattedSales()).toBe('No hay ventas');
    expect(new SellerMetrics(10, 2000).getFormattedSales()).toBe('+2mil');
    expect(new SellerMetrics(10, 2000000).getFormattedSales()).toBe('+2M');
  });

  it('should format products correctly', () => {
    expect(new SellerMetrics(0, 10).getFormattedProducts()).toBe('No hay productos');
    expect(new SellerMetrics(100, 10).getFormattedProducts()).toBe('+100 Productos');
  });

  it('should compare equality correctly', () => {
    const a = new SellerMetrics(10, 20);
    const b = new SellerMetrics(10, 20);
    const c = new SellerMetrics(5, 15);
    expect(a.equals(b)).toBe(true);
    expect(a.equals(c)).toBe(false);
  });

  it('should return string representation', () => {
    const metrics = new SellerMetrics(10, 5000);
    expect(metrics.toString()).toContain('+10 Productos');
    expect(metrics.toString()).toContain('ventas');
  });
});
