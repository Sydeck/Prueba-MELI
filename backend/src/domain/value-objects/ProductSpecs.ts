import { AbstractValueObject } from './AbstractValueObjects';
import { ValidationException } from '../exceptions';

export class ProductSpecs extends AbstractValueObject<{ label: string; value: string }> {
  protected validate(value: { label: string; value: string }): void {
    if (!value.label || !value.value) {
      throw new ValidationException('Spec label and value are required', 'INVALID_PRODUCT_SPEC');
    }
  }

  get label(): string {
    return this._value.label;
  }

  get specValue(): string {
    return this._value.value;
  }
}
