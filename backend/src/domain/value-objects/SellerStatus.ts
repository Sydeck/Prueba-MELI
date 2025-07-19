import { ValidationException } from '../exceptions';

/**
 * SellerStatus VO for seller categories
 */

export class SellerStatus {
  constructor(private readonly _value: (typeof SellerStatus.VALID_STATUSES)[number]) {
    this.validate(_value);
  }

  /**
   * Valid statuses for seller
   */
  private static readonly VALID_STATUSES = [
    'BASICO',
    'GOLD',
    'PLATINUM',
    'TIENDA_OFICIAL',
    'SIN_CLASIFICAR',
  ] as const;

  /**
   * Get the value of the seller status
   */
  get value(): string {
    return this._value;
  }

  /**
   * Validate the seller status
   *
   */
  private validate(value: string): void {
    if (!SellerStatus.VALID_STATUSES.includes(value as any)) {
      throw new ValidationException('Invalid seller status', 'INVALID_SELLER_STATUS');
    }
  }

  /**
   * Check if the seller status is equal to the given status
   */
  public is(status: (typeof SellerStatus.VALID_STATUSES)[number]): boolean {
    return this._value === status;
  }

  /**
   * Check if the seller has reputation
   */
  public hasReputation(reputation: number): boolean {
    return this._value !== 'SIN_CLASIFICAR';
  }

  /**
   * Get the display text for the seller status
   */
  public getDisplayText(): string {
    const displayMap: Record<(typeof SellerStatus.VALID_STATUSES)[number], string> = {
      BASICO: 'MercadoLíder',
      GOLD: 'MercadoLíder Gold',
      PLATINUM: 'MercadoLíder Platinum',
      TIENDA_OFICIAL: 'Tienda oficial de Mercado Libre',
      SIN_CLASIFICAR: 'No tiene suficientes reseñas',
    };
    return displayMap[this._value];
  }

  /**
   * Get the description for the seller status
   */
  public getDescription(): string {
    const descriptionMap: Record<(typeof SellerStatus.VALID_STATUSES)[number], string> = {
      BASICO: 'Vendedor confiable',
      GOLD: 'Vendedor destacado',
      PLATINUM: '¡Uno de los mejores del sitio!',
      TIENDA_OFICIAL: 'Tienda verificada oficialmente',
      SIN_CLASIFICAR: '',
    };
    return descriptionMap[this._value];
  }

  /**
   * Check if the seller status is equal to the other seller status (instance comparison)
   */
  public equals(other: SellerStatus): boolean {
    return this._value === other._value;
  }

  /**
   * Get the string representation of the seller status
   */
  public toString(): string {
    return this.getDisplayText();
  }
}
