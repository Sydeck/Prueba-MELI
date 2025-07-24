"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductCondition_1 = require("../../../../src/domain/value-objects/ProductCondition");
const exceptions_1 = require("../../../../src/domain/exceptions");
describe('ProductCondition', () => {
    it('should create a valid ProductCondition', () => {
        const condition = new ProductCondition_1.ProductCondition('Nuevo');
        expect(condition.value).toBe('Nuevo');
    });
    it('should throw ValidationException for empty value', () => {
        expect(() => new ProductCondition_1.ProductCondition('')).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for invalid condition', () => {
        expect(() => new ProductCondition_1.ProductCondition('Defectuoso')).toThrow(exceptions_1.ValidationException);
    });
});
//# sourceMappingURL=ProductCondition.spec.js.map