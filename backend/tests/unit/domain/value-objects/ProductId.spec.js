"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductId_1 = require("../../../../src/domain/value-objects/ProductId");
const ValidationException_1 = require("../../../../src/domain/exceptions/ValidationException");
describe('ProductId', () => {
    it('should create a valid ProductId', () => {
        const productId = new ProductId_1.ProductId('MLA123456');
        expect(productId.value).toBe('MLA123456');
    });
    it('should throw ValidationException for empty ProductId', () => {
        expect(() => new ProductId_1.ProductId('')).toThrow(ValidationException_1.ValidationException);
    });
    it('should throw ValidationException for invalid format', () => {
        expect(() => new ProductId_1.ProductId('123456')).toThrow(ValidationException_1.ValidationException);
        expect(() => new ProductId_1.ProductId('ML123456')).toThrow(ValidationException_1.ValidationException);
        expect(() => new ProductId_1.ProductId('MLA')).toThrow(ValidationException_1.ValidationException);
    });
});
//# sourceMappingURL=ProductId.spec.js.map