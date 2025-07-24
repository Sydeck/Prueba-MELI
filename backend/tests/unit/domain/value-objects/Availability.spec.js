"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Availability_1 = require("@domain/value-objects/Availability");
const exceptions_1 = require("@domain/exceptions");
describe('Availability', () => {
    it('should create a valid Availability instance', () => {
        const availability = new Availability_1.Availability(10, true);
        expect(availability.stock).toBe(10);
        expect(availability.isAvailable).toBe(true);
        expect(availability.hasStock()).toBe(true);
    });
    it('should throw ValidationException for negative stock', () => {
        expect(() => new Availability_1.Availability(-5, true)).toThrow(exceptions_1.ValidationException);
    });
    it('should return false for insufficient stock', () => {
        const availability = new Availability_1.Availability(2, true);
        expect(availability.hasStock(5)).toBe(false);
    });
    it('should return correct string representation', () => {
        const available = new Availability_1.Availability(5, true);
        const unavailable = new Availability_1.Availability(0, false);
        expect(available.toString()).toBe('Disponible (5)');
        expect(unavailable.toString()).toBe('No disponible');
    });
    it('should compare equality correctly', () => {
        const a = new Availability_1.Availability(10, true);
        const b = new Availability_1.Availability(10, true);
        const c = new Availability_1.Availability(5, false);
        expect(a.equals(b)).toBe(true);
        expect(a.equals(c)).toBe(false);
    });
});
//# sourceMappingURL=Availability.spec.js.map