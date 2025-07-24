"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductTitle_1 = require("../../../../src/domain/value-objects/ProductTitle");
const exceptions_1 = require("../../../../src/domain/exceptions");
describe('ProductTitle', () => {
    it('should create a valid ProductTitle', () => {
        const title = new ProductTitle_1.ProductTitle('Valid Product');
        expect(title.value).toBe('Valid Product');
    });
    it('should throw ValidationException for empty title', () => {
        expect(() => new ProductTitle_1.ProductTitle('')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for title shorter than 3 characters', () => {
        expect(() => new ProductTitle_1.ProductTitle('AB')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for title longer than 100 characters', () => {
        const longTitle = 'A'.repeat(101);
        expect(() => new ProductTitle_1.ProductTitle(longTitle)).toThrow(exceptions_1.ValidationException);
    });
    it('should consider two titles with the same value as equal', () => {
        const t1 = new ProductTitle_1.ProductTitle('Same Title');
        const t2 = new ProductTitle_1.ProductTitle('Same Title');
        expect(t1.equals(t2)).toBe(true);
    });
});
//# sourceMappingURL=ProductTitle.spec.js.map