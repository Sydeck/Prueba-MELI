import { Validator } from './ValidatorStrategy';

/**
 * Product Validator class
 */
export class ProductValidator {
  /**
   * Main validator for the product ID
   */
  private static readonly productIdValidator = Validator.create()
    .require()
    .string()
    .notEmptyString()
    .minStringLength(3);

  /**
   * Validate the product ID execution
   */
  static validateId(productId: string) {
    this.productIdValidator.validate(productId, 'product Id');
  }

  /**
   * Validate the product execution
   */
  static validateProduct(product: any) {
    Validator.create().require().validate(product, 'Product');
    if (product) {
      Validator.create()
        .require()
        .string()
        .notEmptyString()
        .validate(product.title, 'ProductTitle');
    }
  }
}
