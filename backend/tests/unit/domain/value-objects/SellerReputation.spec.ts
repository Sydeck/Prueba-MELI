import { SellerReputation } from '@domain/value-objects/SellerReputation';
import { ValidationException } from '@domain/exceptions';

describe('SellerReputation', () => {
  it('should create a valid SellerReputation', () => {
    const reputation = new SellerReputation(4.8);
    expect(reputation.score).toBe(4.8);
    expect(reputation.isExcellent()).toBe(true);
  });

  it('should throw ValidationException for score below 0', () => {
    expect(() => new SellerReputation(-1)).toThrow(ValidationException);
  });

  it('should throw ValidationException for score above 5', () => {
    expect(() => new SellerReputation(6)).toThrow(ValidationException);
  });

  it('should return a proper string representation', () => {
    const reputation = new SellerReputation(3);
    expect(reputation.toString()).toContain('★');
    expect(reputation.toString()).toContain('/5');
  });
});
