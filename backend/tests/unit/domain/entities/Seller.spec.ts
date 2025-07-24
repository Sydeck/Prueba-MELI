import { Seller } from '@domain/entities/Seller';
import { SellerId } from '@domain/value-objects/SellerId';
import { SellerName } from '@domain/value-objects/SellerName';
import { SellerStatus } from '@domain/value-objects/SellerStatus';
import { SellerMetrics } from '@domain/value-objects/SellerMetrics';
import { SellerReputation } from '@domain/value-objects/SellerReputation';

describe('Seller Entity', () => {
  const id = new SellerId('12345');
  const name = new SellerName('Test Seller');
  const status = new SellerStatus('PLATINUM');
  const metrics = new SellerMetrics(100, 5000);
  const reputation = new SellerReputation(4.8);
  const brandLogo = 'https://example.com/logo.png';

  const seller = new Seller(id, name, status, metrics, reputation, brandLogo);

  it('should create a valid Seller instance', () => {
    expect(seller.id).toBe(id);
    expect(seller.name).toBe(name);
    expect(seller.status).toBe(status);
    expect(seller.metrics).toBe(metrics);
    expect(seller.reputation).toBe(reputation);
    expect(seller.brandLogo).toBe(brandLogo);
  });

  it('should return true for isTrustworthy when reputation is excellent', () => {
    expect(seller.isTrustworthy()).toBe(true);
  });

  it('should return true for isOfficialStore when status is TIENDA_OFICIAL', () => {
    const officialSeller = new Seller(
      id,
      name,
      new SellerStatus('TIENDA_OFICIAL'),
      metrics,
      reputation,
      brandLogo
    );
    expect(officialSeller.isOfficialStore()).toBe(true);
  });

  it('should return formatted display info', () => {
    const info = seller.getDisplayInfo();
    expect(typeof info).toBe('string');
    expect(info).toContain('MercadoLíder Platinum');
  });

  it('should return true for equals when IDs match', () => {
    const sameIdSeller = new Seller(id, name, status, metrics, reputation, brandLogo);
    expect(seller.equals(sameIdSeller)).toBe(true);
  });

  it('should return a formatted string from toString', () => {
    const str = seller.toString();
    expect(str).toContain(name.value);
    expect(str).toContain(status.getDisplayText());
  });
});
