"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SellerStatus_1 = require("../../../../src/domain/value-objects/SellerStatus");
const exceptions_1 = require("../../../../src/domain/exceptions");
describe('SellerStatus', () => {
    it('should create a valid SellerStatus', () => {
        const status = new SellerStatus_1.SellerStatus('GOLD');
        expect(status.value).toBe('GOLD');
        expect(status.getDisplayText()).toBe('MercadoLíder Gold');
        expect(status.getDescription()).toBe('Vendedor destacado');
    });
    it('should throw ValidationException for invalid status', () => {
        expect(() => new SellerStatus_1.SellerStatus('INVALID')).toThrow(exceptions_1.ValidationException);
    });
    it('should correctly check if status is a specific value', () => {
        const status = new SellerStatus_1.SellerStatus('PLATINUM');
        expect(status.is('PLATINUM')).toBe(true);
        expect(status.is('GOLD')).toBe(false);
    });
    it('should compare equality correctly', () => {
        const a = new SellerStatus_1.SellerStatus('BASICO');
        const b = new SellerStatus_1.SellerStatus('BASICO');
        const c = new SellerStatus_1.SellerStatus('GOLD');
        expect(a.equals(b)).toBe(true);
        expect(a.equals(c)).toBe(false);
    });
    it('should return proper string representation', () => {
        const status = new SellerStatus_1.SellerStatus('TIENDA_OFICIAL');
        expect(status.toString()).toBe('Tienda oficial de Mercado Libre');
    });
});
//# sourceMappingURL=SellerStatus.spec.js.map