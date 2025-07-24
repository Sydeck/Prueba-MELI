"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductImage_1 = require("@domain/value-objects/ProductImage");
const exceptions_1 = require("@domain/exceptions");
describe('ProductImage', () => {
    it('should create a valid ProductImage', () => {
        const image = new ProductImage_1.ProductImage('https://example.com/image.jpg');
        expect(image.url).toBe('https://example.com/image.jpg');
    });
    it('should throw ValidationException for empty URL', () => {
        expect(() => new ProductImage_1.ProductImage('')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for invalid URL', () => {
        expect(() => new ProductImage_1.ProductImage('not-a-url')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for unsupported extension', () => {
        expect(() => new ProductImage_1.ProductImage('https://example.com/file.txt')).toThrow(exceptions_1.ValidationException);
    });
});
//# sourceMappingURL=ProductImage.spec.js.map