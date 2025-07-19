import { InvalidMoneyException } from "../exceptions";

/**
 * Support currencies
 */
export type Currency = "MXN" | "USD" | "ARS" | "BRL" | "CLP" | "COL" ;

/** 
 * Money VO handles currency, amount and discounts
 * Provides immutable price calculation and localized formatting
*/
export class Money {
    constructor(
        private readonly _amount: number,
        private readonly _currency: Currency,
        private readonly _discount: number
    ){
        this.validateAmount(_amount);
        this.validateDiscount(_discount);
    }

    get amount(): number{
        return this._amount;
    }

    get currency(): Currency{
        return this._currency;
    }

    get discount(): number{
        return this._discount;
    }

    /**
     * Create Money with discount
     */
    public applyDiscount(discountPercentage: number): Money{
        const discountAmount = this._amount * (1-discountPercentage/100);
        return new Money(discountAmount, this._currency, discountPercentage);
    }

    /**
     * Calculate price after discount
     */
    public getDiscountAmount(): number{
        return this._amount * (1 - this._discount / 100);
    }

    /**
     * Format price for display
     */
    public formatForDisplay(): string{
        const currencyMap = {
            "MXN": "es-MX",
            "USD": "en-US",
            "ARS": "es-AR",
            "BRL": "pt-BR",
            "CLP": "es-CL",
            "COL": "es-CO"
        }
        const locale = currencyMap[this._currency] || "es-MX";
        const formatter = new Intl.NumberFormat(locale,{
            style: 'currency',
            currency: this._currency,
        });
        
        return formatter.format(this.getDiscountAmount())
        
    }

    /**
     * Validate amount
     */
    private validateAmount(amount: number) : void{
        if(amount <= 0){
            throw new InvalidMoneyException("Amount must be greater than 0");
        }
    }

    /**
     * Validate discount
     */
    private validateDiscount(discount: number) : void{
        if(discount < 0 || discount > 100){
            throw new InvalidMoneyException("Discount must be between 0 and 100");
        }    

    }
    
    /**
    * Value object equality comparison (For same value different instances)
    */
    public equals(other : Money): boolean{
        return(
            this._amount === other._amount && 
            this._currency == other._currency &&
            this._discount == other._discount
        )
    }
}

