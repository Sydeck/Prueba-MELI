import { AbstractValueObject } from './AbstractValueObjects';
import { ValidationException } from '../exceptions/ValidationException';

export class ProductSpecs extends AbstractValueObject<{
  label: string;
  value: string;
}> {
  constructor(value: { label: string; value: string }) {
    super(value);
  }

  get label(): string {
    return this._value.label;
  }

  get specValue(): string {
    return this._value.value;
  }

  protected validate(value: { label: string; value: string }): void {
    if (!value.label || value.label.trim().length === 0) {
      throw new ValidationException('Product spec label cannot be empty', 'INVALID_SPEC_LABEL');
    }

    if (!value.value || value.value.trim().length === 0) {
      throw new ValidationException('Product spec value cannot be empty', 'INVALID_SPEC_VALUE');
    }
  }
}
