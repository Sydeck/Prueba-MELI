"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SellerId_1 = require("@domain/value-objects/SellerId");
const exceptions_1 = require("@domain/exceptions");
describe('SellerId', () => {
    it('should create a valid SellerId', () => {
        const id = new SellerId_1.SellerId('12345');
        expect(id.value).toBe('12345');
    });
    it('should throw ValidationException for empty value', () => {
        expect(() => new SellerId_1.SellerId('')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for non-numeric value', () => {
        expect(() => new SellerId_1.SellerId('abc123')).toThrow(exceptions_1.ValidationException);
    });
});
//# sourceMappingURL=SellerId.spec.js.map