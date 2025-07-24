"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SellerName_1 = require("../../../../src/domain/value-objects/SellerName");
const exceptions_1 = require("../../../../src/domain/exceptions");
describe('SellerName', () => {
    it('should create a valid SellerName', () => {
        const name = new SellerName_1.SellerName('Valid Store & Co.');
        expect(name.value).toBe('Valid Store & Co.');
    });
    it('should throw ValidationException for empty name', () => {
        expect(() => new SellerName_1.SellerName('')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for too short name', () => {
        expect(() => new SellerName_1.SellerName('AB')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for too long name', () => {
        const longName = 'A'.repeat(101);
        expect(() => new SellerName_1.SellerName(longName)).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for invalid characters', () => {
        expect(() => new SellerName_1.SellerName('Invalid@Name!')).toThrow(exceptions_1.ValidationException);
    });
});
//# sourceMappingURL=SellerName.spec.js.map