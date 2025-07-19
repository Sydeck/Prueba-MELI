/**
 * Abstract VO class
 * @template T The type of the value object
 */
export abstract class AbstractValueObject<T> {
  constructor(protected readonly _value: T) {
    this.validate(_value);
  }

  get value(): T {
    return this._value;
  }
  /**
   * Value object equality comparison (For same value different instances)
   */
  public equals(other: AbstractValueObject<T>): boolean {
    return this._value === other._value;
  }

  /**
   * Value object toString
   */
  public toString(): string {
    return String(this._value);
  }

  /**
   * Validate value object
   */
  protected abstract validate(value: T): void;
}
