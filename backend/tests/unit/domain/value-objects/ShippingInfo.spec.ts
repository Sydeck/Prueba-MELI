import { ShippingInfo } from '../../../../src/domain/value-objects/ShippingInfo';
import { Money } from '../../../../src/domain/value-objects/Money';

describe('ShippingInfo', () => {
  it('should create a valid ShippingInfo with free shipping', () => {
    const cost = new Money(0, 'USD', 0);
    const shipping = new ShippingInfo(cost, true, '2-3 días');
    expect(shipping.isFree).toBe(true);
    expect(shipping.toString()).toBe('Envío gratis');
  });

  it('should create a valid ShippingInfo with paid shipping', () => {
    const cost = new Money(20, 'USD', 0);
    const shipping = new ShippingInfo(cost, false, '3-5 días');
    expect(shipping.isFree).toBe(false);
    expect(shipping.toString()).toContain('Envío:');
    expect(shipping.toString()).toContain('$');
  });

  it('should compare equality correctly', () => {
    const cost = new Money(15, 'USD', 0);
    const a = new ShippingInfo(cost, false, '2 días');
    const b = new ShippingInfo(cost, false, '2 días');
    const c = new ShippingInfo(new Money(10, 'USD', 0), false, '5 días');
    expect(a.equals(b)).toBe(true);
    expect(a.equals(c)).toBe(false);
  });
});
