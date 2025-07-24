import { Validator } from '../ValidatorStrategy';

describe('Validator', () => {
  describe('require', () => {
    it('should throw if value is null or undefined', () => {
      const validator = Validator.create().require();
      expect(() => validator.validate(undefined, 'Field')).toThrow('Field is required');
      expect(() => validator.validate(null, 'Field')).toThrow('Field is required');
    });

    it('should not throw if value is provided', () => {
      const validator = Validator.create().require();
      expect(() => validator.validate('something', 'Field')).not.toThrow();
      expect(() => validator.validate(0, 'Field')).not.toThrow(); // 0 counts as value
    });
  });

  describe('string', () => {
    it('should throw if value is not a string', () => {
      const validator = Validator.create().string();
      expect(() => validator.validate(123, 'Field')).toThrow('Field must be a string');
      expect(() => validator.validate({}, 'Field')).toThrow('Field must be a string');
    });

    it('should not throw for a string value', () => {
      const validator = Validator.create().string();
      expect(() => validator.validate('valid', 'Field')).not.toThrow();
    });
  });

  describe('notEmptyString', () => {
    it('should throw if value is empty or whitespace', () => {
      const validator = Validator.create().notEmptyString();
      expect(() => validator.validate('', 'Field')).toThrow('Field cannot be empty');
      expect(() => validator.validate('   ', 'Field')).toThrow('Field cannot be empty');
    });

    it('should not throw for a non-empty string', () => {
      const validator = Validator.create().notEmptyString();
      expect(() => validator.validate('value', 'Field')).not.toThrow();
    });
  });

  describe('minStringLength', () => {
    it('should throw if string is shorter than min length', () => {
      const validator = Validator.create().minStringLength(5);
      expect(() => validator.validate('abc', 'Field')).toThrow('Field must be at least 5');
    });

    it('should not throw if string meets min length', () => {
      const validator = Validator.create().minStringLength(3);
      expect(() => validator.validate('abcd', 'Field')).not.toThrow();
    });
  });

  describe('multiple rules', () => {
    it('should enforce multiple chained rules', () => {
      const validator = Validator.create().require().string().notEmptyString().minStringLength(3);
      expect(() => validator.validate('abc', 'Field')).not.toThrow();
      expect(() => validator.validate('', 'Field')).toThrow();
      expect(() => validator.validate(123 as any, 'Field')).toThrow();
      expect(() => validator.validate('ab', 'Field')).toThrow();
    });
  });
});
