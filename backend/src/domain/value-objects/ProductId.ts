import { ValidationException } from "../exceptions";
/**
 * ProductId VO for MercadoLibre 
 * Enforces ML validation (ej. MLM50911552)
 */
export class ProductId {
    constructor(private readonly _value : string){  //Immutable value
        this.validate(_value)
    }

    get value():string{
        return this._value
    }

    /**
     * Validate ProductId format
     * pattern ML + Country Code [ M = MEX] + numbers
    */
    private validate(value : string){
        if(!value || value.trim().length === 0){
            throw new ValidationException("Product ID cannot be empty", "EMPTY_PRODUCT_ID");
        }
        
        const pattern = /^ML[A-Z]\d+$/;
        if(!pattern.test(value)){
            throw new ValidationException("Invalid product ID format", "INVALID_PRODUCT_ID_FORMAT");
        }
    } 

    /**
    * Value object equality comparison (For same value different instances)
    */
    public equals(other: ProductId): boolean{
        return this._value === other._value;
    }

    /**
    * Convert to string
    */
    public toString(): string{
        return this._value;
    }
   
}