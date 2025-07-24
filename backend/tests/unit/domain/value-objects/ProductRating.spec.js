"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRating_1 = require("@domain/value-objects/ProductRating");
const exceptions_1 = require("@domain/exceptions");
describe('ProductRating', () => {
    it('should create a valid rating', () => {
        const rating = new ProductRating_1.ProductRating(4.5);
        expect(rating.value).toBe(4.5);
    });
    it('should throw ValidationException for rating below 0', () => {
        expect(() => new ProductRating_1.ProductRating(-1)).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for rating above 5', () => {
        expect(() => new ProductRating_1.ProductRating(6)).toThrow(exceptions_1.ValidationException);
    });
});
//# sourceMappingURL=ProductRating.spec.js.map