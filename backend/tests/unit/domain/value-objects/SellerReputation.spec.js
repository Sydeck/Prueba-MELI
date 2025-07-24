"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SellerReputation_1 = require("@domain/value-objects/SellerReputation");
const exceptions_1 = require("@domain/exceptions");
describe('SellerReputation', () => {
    it('should create a valid SellerReputation', () => {
        const reputation = new SellerReputation_1.SellerReputation(4.8);
        expect(reputation.score).toBe(4.8);
        expect(reputation.isExcellent()).toBe(true);
    });
    it('should throw ValidationException for score below 0', () => {
        expect(() => new SellerReputation_1.SellerReputation(-1)).toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException for score above 5', () => {
        expect(() => new SellerReputation_1.SellerReputation(6)).toThrow(exceptions_1.ValidationException);
    });
    it('should return a proper string representation', () => {
        const reputation = new SellerReputation_1.SellerReputation(3);
        expect(reputation.toString()).toContain('★');
        expect(reputation.toString()).toContain('/5');
    });
});
//# sourceMappingURL=SellerReputation.spec.js.map