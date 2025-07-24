"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductVariant_1 = require("@domain/value-objects/ProductVariant");
const ProductImage_1 = require("@domain/value-objects/ProductImage");
const exceptions_1 = require("@domain/exceptions");
describe('ProductVariant', () => {
    const validImages = [new ProductImage_1.ProductImage('https://example.com/img1.jpg')];
    it('should create a valid ProductVariant', () => {
        const variant = new ProductVariant_1.ProductVariant({
            id: 'VAR123',
            color: 'Black',
            storage: '256GB',
            price: 499.99,
            images: validImages,
            stock: 10,
        });
        expect(variant.id).toBe('VAR123');
        expect(variant.images.length).toBe(1);
    });
    it('should throw ValidationException if id, color or storage are missing', () => {
        expect(() => new ProductVariant_1.ProductVariant({
            id: '',
            color: '',
            storage: '',
            price: 499.99,
            images: validImages,
            stock: 10,
        })).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException if no images are provided', () => {
        expect(() => new ProductVariant_1.ProductVariant({
            id: 'VAR123',
            color: 'Black',
            storage: '256GB',
            price: 499.99,
            images: [],
            stock: 10,
        })).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException if images are not ProductImage instances', () => {
        expect(() => new ProductVariant_1.ProductVariant({
            id: 'VAR123',
            color: 'Black',
            storage: '256GB',
            price: 499.99,
            images: ['not-an-image'],
            stock: 10,
        })).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for invalid price or stock', () => {
        expect(() => new ProductVariant_1.ProductVariant({
            id: 'VAR123',
            color: 'Black',
            storage: '256GB',
            price: 0,
            images: validImages,
            stock: -1,
        })).toThrow(exceptions_1.ValidationException);
    });
});
//# sourceMappingURL=ProductVariant.spec.js.map