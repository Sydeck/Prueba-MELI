"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SellerMetrics_1 = require("../../../../src/domain/value-objects/SellerMetrics");
const exceptions_1 = require("../../../../src/domain/exceptions");
describe('SellerMetrics', () => {
    it('should create a valid SellerMetrics', () => {
        const metrics = new SellerMetrics_1.SellerMetrics(100, 5000);
        expect(metrics.totalProducts).toBe(100);
        expect(metrics.totalSales).toBe(5000);
    });
    it('should throw ValidationException for negative products', () => {
        expect(() => new SellerMetrics_1.SellerMetrics(-1, 100)).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for negative sales', () => {
        expect(() => new SellerMetrics_1.SellerMetrics(10, -5)).toThrow(exceptions_1.ValidationException);
    });
    it('should format sales correctly', () => {
        expect(new SellerMetrics_1.SellerMetrics(10, 0).getFormattedSales()).toBe('No hay ventas');
        expect(new SellerMetrics_1.SellerMetrics(10, 2000).getFormattedSales()).toBe('+2mil');
        expect(new SellerMetrics_1.SellerMetrics(10, 2000000).getFormattedSales()).toBe('+2M');
    });
    it('should format products correctly', () => {
        expect(new SellerMetrics_1.SellerMetrics(0, 10).getFormattedProducts()).toBe('No hay productos');
        expect(new SellerMetrics_1.SellerMetrics(100, 10).getFormattedProducts()).toBe('+100 Productos');
    });
    it('should compare equality correctly', () => {
        const a = new SellerMetrics_1.SellerMetrics(10, 20);
        const b = new SellerMetrics_1.SellerMetrics(10, 20);
        const c = new SellerMetrics_1.SellerMetrics(5, 15);
        expect(a.equals(b)).toBe(true);
        expect(a.equals(c)).toBe(false);
    });
    it('should return string representation', () => {
        const metrics = new SellerMetrics_1.SellerMetrics(10, 5000);
        expect(metrics.toString()).toContain('+10 Productos');
        expect(metrics.toString()).toContain('ventas');
    });
});
//# sourceMappingURL=SellerMetrics.spec.js.map