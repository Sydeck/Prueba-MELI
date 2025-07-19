import { ValidationException } from "../exceptions";

class ProductTitle {
    constructor(private readonly _value: string){
        this.validate(_value);
    }

    get value(): string{
        return this._value;
    }

    /**
     * Validate product title format
     */
    private validate(value: string): void{
        if(value.length < 3 || value.length > 100){
            throw new ValidationException("Product title must be between 3 and 100 characters", "INVALID_PRODUCT_TITLE_LENGTH");
        }
        
        //optionally validate if the title is too long
        if(value.trim().length > 255){
            throw new ValidationException("Product title must be less than 255 characters", "INVALID_PRODUCT_TITLE_LENGTH");
        }
    }

    /**
     * Value object equality comparison (For same value different instances)
     */
    public equals(other: ProductTitle): boolean{
        return this._value === other.value;
    }

    /**
     * Value object toString
     */
    public toString(): string{
        return this._value;
    }

    
}