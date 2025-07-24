type ValidationRule = (value: any, field: string) => void;

/**
 * Validator Strategy class
 */
export class Validator {
  private rules: ValidationRule[] = [];

  /**
   * Create a new validator
   */
  static create(): Validator {
    return new Validator();
  }

  /**
   * Require the value to be present
   */
  require(): Validator {
    this.rules.push((value, field) => {
      if (value === null || value === undefined) {
        throw new globalThis.Error(`${field} is required`);
      }
    });
    return this;
  }

  /**
   * Require the value to be a string
   */
  string(): Validator {
    this.rules.push((value, field) => {
      if (typeof value !== 'string') throw new globalThis.Error(`${field} must be a string`);
    });
    return this;
  }

  /**
   * Require the value to be a non-empty string
   */
  notEmptyString(): Validator {
    this.rules.push((value, field) => {
      if (typeof value !== 'string' || value.trim().length === 0) {
        throw new globalThis.Error(`${field} cannot be empty`);
      }
    });
    return this;
  }

  /**
   * Require the value to be a string with a minimum length
   */
  minStringLength(min: number): Validator {
    this.rules.push((value, field) => {
      if (typeof value !== 'string' || value.length < min) {
        throw new globalThis.Error(`${field} must be at least ${min}`);
      }
    });
    return this;
  }

  /**
   * Validate the value execution
   */
  validate(value: any, field: string): void {
    for (const rule of this.rules) {
      rule(value, field);
    }
  }
}
