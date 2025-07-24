"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Money_1 = require("@domain/value-objects/Money");
const exceptions_1 = require("@domain/exceptions");
describe('Money', () => {
    it('should create a valid Money instance', () => {
        const money = new Money_1.Money(100, 'USD', 10);
        expect(money.amount).toBe(100);
        expect(money.currency).toBe('USD');
        expect(money.discount).toBe(10);
    });
    it('should throw ValidationException for negative amount', () => {
        expect(() => new Money_1.Money(-50, 'USD', 0)).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for invalid currency', () => {
        expect(() => new Money_1.Money(100, '', 0)).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for discount out of range', () => {
        expect(() => new Money_1.Money(100, 'USD', 150)).toThrow(exceptions_1.ValidationException);
        expect(() => new Money_1.Money(100, 'USD', -10)).toThrow(exceptions_1.ValidationException);
    });
    it('should calculate discounted amount correctly', () => {
        const money = new Money_1.Money(200, 'USD', 25);
        expect(money.getDiscountAmount()).toBe(150);
    });
    it('should apply discount and return a new Money instance', () => {
        const money = new Money_1.Money(200, 'USD', 0);
        const discounted = money.applyDiscount(20);
        expect(discounted.amount).toBe(160);
        expect(discounted.discount).toBe(20);
        expect(discounted.currency).toBe('USD');
    });
    it('should format amount for display', () => {
        const money = new Money_1.Money(1234.56, 'USD', 0);
        expect(money.formatForDisplay()).toContain('$');
    });
    it('should compare equality between two Money instances', () => {
        const m1 = new Money_1.Money(100, 'USD', 10);
        const m2 = new Money_1.Money(100, 'USD', 10);
        const m3 = new Money_1.Money(200, 'USD', 0);
        expect(m1.equals(m2)).toBe(true);
        expect(m1.equals(m3)).toBe(false);
    });
});
//# sourceMappingURL=Money.spec.js.map