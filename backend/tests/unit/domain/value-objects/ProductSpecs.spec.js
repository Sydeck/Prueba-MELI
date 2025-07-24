"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductSpecs_1 = require("@domain/value-objects/ProductSpecs");
const exceptions_1 = require("@domain/exceptions");
describe('ProductSpecs', () => {
    it('should create a valid ProductSpecs instance', () => {
        const spec = new ProductSpecs_1.ProductSpecs({ label: 'RAM', value: '8GB' });
        expect(spec.label).toBe('RAM');
        expect(spec.specValue).toBe('8GB');
    });
    it('should throw ValidationException for empty label', () => {
        expect(() => new ProductSpecs_1.ProductSpecs({ label: '', value: '8GB' })).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for empty value', () => {
        expect(() => new ProductSpecs_1.ProductSpecs({ label: 'RAM', value: '' })).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for whitespace-only label or value', () => {
        expect(() => new ProductSpecs_1.ProductSpecs({ label: '   ', value: '8GB' })).toThrow(exceptions_1.ValidationException);
        expect(() => new ProductSpecs_1.ProductSpecs({ label: 'RAM', value: '   ' })).toThrow(exceptions_1.ValidationException);
    });
});
//# sourceMappingURL=ProductSpecs.spec.js.map