"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductDescription_1 = require("@domain/value-objects/ProductDescription");
const exceptions_1 = require("@domain/exceptions");
describe('ProductDescription', () => {
    it('should create a valid ProductDescription', () => {
        const description = new ProductDescription_1.ProductDescription('This is a valid product description.');
        expect(description.value).toBe('This is a valid product description.');
    });
    it('should throw ValidationException for empty description', () => {
        expect(() => new ProductDescription_1.ProductDescription('')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for too short description', () => {
        expect(() => new ProductDescription_1.ProductDescription('Short')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for too long description', () => {
        const longText = 'A'.repeat(6000);
        expect(() => new ProductDescription_1.ProductDescription(longText)).toThrow(exceptions_1.ValidationException);
    });
});
//# sourceMappingURL=ProductDescription.spec.js.map