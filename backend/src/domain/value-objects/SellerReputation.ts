import { ValidationException } from '../exceptions';
/**
 * SellerReputation VO for seller rating
 */

class SellerReputation {
  constructor(private readonly _score: number) {
    this.validate(_score);
  }

  /*
   * Get the score
   */
  get score(): number {
    return this._score;
  }

  /*
   * Validate the score
   */
  private validate(score: number): void {
    if (score < 0 || score > 5) {
      throw new ValidationException(
        'Score must be between 0 and 5',
        'INVALID_SELLER_REPUTATION_SCORE'
      );
    }
  }

  /*
   * Check if the score is equal to another score (instance comparison)
   */
  private equals(other: SellerReputation): boolean {
    return this._score === other._score;
  }

  /*
   * Return a string representation of the score
   */
  public toString(): string {
    return `Reputación del vendedor: ${this._score}`;
  }
}
