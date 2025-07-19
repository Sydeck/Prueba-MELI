import { ValidationException } from '../exceptions';
import { AbstractValueObject } from './AbstractValueObjects';

/**
 * Product image value object whit URL validation
 */
export class ProductImage extends AbstractValueObject<string> {
  get url(): string {
    return this._value;
  }

  /**
   * Validate product image format
   */

  protected validate(value: string): void {
    if (!value || value.trim().length === 0) {
      throw new ValidationException('Product image cannot be empty', 'EMPTY_PRODUCT_IMAGE');
    }

    try {
      new URL(value);
    } catch (error) {
      throw new ValidationException('Invalid image URL format', 'INVALID_PRODUCT_IMAGE');
    }

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'];
    const hasValidExtension = imageExtensions.some(extension =>
      value.toLowerCase().endsWith(extension)
    );
    if (!hasValidExtension) {
      throw new ValidationException(
        'Invalid image file extension',
        'INVALID_PRODUCT_IMAGE_EXTENSION'
      );
    }
  }
}
