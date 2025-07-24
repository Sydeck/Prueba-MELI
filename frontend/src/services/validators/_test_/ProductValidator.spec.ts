import { ProductValidator } from '../ProductValidator';

describe('ProductValidator', () => {
  describe('validateId', () => {
    it('should not throw for a valid product id', () => {
      expect(() => ProductValidator.validateId('ABC123')).not.toThrow();
    });

    it('should throw for an empty product id', () => {
      expect(() => ProductValidator.validateId('')).toThrow(/product Id/);
    });

    it('should throw for a non-string product id', () => {
      expect(() => ProductValidator.validateId(null as any)).toThrow(/product Id/);
      expect(() => ProductValidator.validateId(123 as any)).toThrow(/product Id/);
    });

    it('should throw for a product id shorter than 3 characters', () => {
      expect(() => ProductValidator.validateId('ab')).toThrow(/product Id/);
    });
  });

  describe('validateProduct', () => {
    it('should not throw for a valid product', () => {
      const validProduct = { title: 'Valid Product' };
      expect(() => ProductValidator.validateProduct(validProduct)).not.toThrow();
    });

    it('should throw if product is null or undefined', () => {
      expect(() => ProductValidator.validateProduct(null)).toThrow(/Product/);
      expect(() => ProductValidator.validateProduct(undefined)).toThrow(/Product/);
    });

    it('should throw if product title is missing or empty', () => {
      const productWithoutTitle = { title: '' };
      expect(() => ProductValidator.validateProduct(productWithoutTitle)).toThrow(/ProductTitle/);
    });
  });
});
