import { DomainException } from "./DomainException";
/**
 * Exception for invalid product ID format
 * Maps to 400 Bad Request
 */
export class InvalidProductIdException extends DomainException {
    readonly code: string = "INVALID_PRODUCT_ID";
    readonly codeStatus: string = "400";

    constructor(message: string = "Invalid product ID format"){
        super(message);
    }
}