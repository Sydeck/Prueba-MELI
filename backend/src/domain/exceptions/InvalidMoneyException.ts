import { DomainException } from "./DomainException";
/**
 * Exception for invalid money format
 * Maps to 400 Bad Request
 */
export class InvalidMoneyException extends DomainException {
    readonly code: string = "INVALID_MONEY";
    readonly codeStatus: string = "400";

    constructor(message: string = "Invalid money format"){ 
        super(message);
    }
}