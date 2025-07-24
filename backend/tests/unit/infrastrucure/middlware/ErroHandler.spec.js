"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = require("../../../../src/infrastructure/middleware/ErrorHandler");
const exceptions_1 = require("../../../../src/domain/exceptions");
describe('ErrorHandler Middleware', () => {
    let mockReq;
    let mockRes;
    let mockNext;
    beforeEach(() => {
        mockReq = {};
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
    });
    it('should handle DomainException (ValidationException) and return correct status and body', () => {
        const error = new exceptions_1.ValidationException('Test domain error', 'TEST_ERROR', 400);
        ErrorHandler_1.ErrorHandler.handle(error, mockReq, mockRes, mockNext);
        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({
            error: expect.objectContaining({
                code: 'TEST_ERROR',
                message: 'Test domain error',
            }),
        }));
    });
    it('should handle generic errors and return 500', () => {
        const error = new Error('Unexpected error');
        ErrorHandler_1.ErrorHandler.handle(error, mockReq, mockRes, mockNext);
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({
            error: expect.objectContaining({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'An unexpected error occurred',
            }),
        }));
    });
});
//# sourceMappingURL=ErroHandler.spec.js.map