"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Seller_1 = require("@domain/entities/Seller");
const SellerId_1 = require("@domain/value-objects/SellerId");
const SellerName_1 = require("@domain/value-objects/SellerName");
const SellerStatus_1 = require("@domain/value-objects/SellerStatus");
const SellerMetrics_1 = require("@domain/value-objects/SellerMetrics");
const SellerReputation_1 = require("@domain/value-objects/SellerReputation");
describe('Seller Entity', () => {
    const id = new SellerId_1.SellerId('12345');
    const name = new SellerName_1.SellerName('Test Seller');
    const status = new SellerStatus_1.SellerStatus('PLATINUM');
    const metrics = new SellerMetrics_1.SellerMetrics(100, 5000);
    const reputation = new SellerReputation_1.SellerReputation(4.8);
    const brandLogo = 'https://example.com/logo.png';
    const seller = new Seller_1.Seller(id, name, status, metrics, reputation, brandLogo);
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
        const officialSeller = new Seller_1.Seller(id, name, new SellerStatus_1.SellerStatus('TIENDA_OFICIAL'), metrics, reputation, brandLogo);
        expect(officialSeller.isOfficialStore()).toBe(true);
    });
    it('should return formatted display info', () => {
        const info = seller.getDisplayInfo();
        expect(typeof info).toBe('string');
        expect(info).toContain('MercadoLíder Platinum');
    });
    it('should return true for equals when IDs match', () => {
        const sameIdSeller = new Seller_1.Seller(id, name, status, metrics, reputation, brandLogo);
        expect(seller.equals(sameIdSeller)).toBe(true);
    });
    it('should return a formatted string from toString', () => {
        const str = seller.toString();
        expect(str).toContain(name.value);
        expect(str).toContain(status.getDisplayText());
    });
});
//# sourceMappingURL=Seller.spec.js.map