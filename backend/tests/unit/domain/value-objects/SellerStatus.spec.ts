import { SellerStatus } from '../../../../src/domain/value-objects/SellerStatus';
import { ValidationException } from '../../../../src/domain/exceptions';

describe('SellerStatus', () => {
  it('should create a valid SellerStatus', () => {
    const status = new SellerStatus('GOLD');
    expect(status.value).toBe('GOLD');
    expect(status.getDisplayText()).toBe('MercadoLíder Gold');
    expect(status.getDescription()).toBe('Vendedor destacado');
  });

  it('should throw ValidationException for invalid status', () => {
    expect(() => new SellerStatus('INVALID' as any)).toThrow(ValidationException);
  });

  it('should correctly check if status is a specific value', () => {
    const status = new SellerStatus('PLATINUM');
    expect(status.is('PLATINUM')).toBe(true);
    expect(status.is('GOLD')).toBe(false);
  });

  it('should compare equality correctly', () => {
    const a = new SellerStatus('BASICO');
    const b = new SellerStatus('BASICO');
    const c = new SellerStatus('GOLD');
    expect(a.equals(b)).toBe(true);
    expect(a.equals(c)).toBe(false);
  });

  it('should return proper string representation', () => {
    const status = new SellerStatus('TIENDA_OFICIAL');
    expect(status.toString()).toBe('Tienda oficial de Mercado Libre');
  });
});
