import { InvalidProductIdException } from "../exceptions";
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
            throw new InvalidProductIdException("Product ID cannot be empty");
        }
        
        const pattern = /^ML[A-Z]\d+$/;
        if(!pattern.test(value)){
            throw new InvalidProductIdException("Invalid product ID format");
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