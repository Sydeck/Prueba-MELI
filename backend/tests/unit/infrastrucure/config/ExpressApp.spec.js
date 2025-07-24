"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const ExpressApp_1 = require("@infrastructure/config/ExpressApp");
const InMemoryProductRepository_1 = require("@infrastructure/adapters/outbound/persistence/InMemoryProductRepository");
const GetProductDetailsUseCase_1 = require("@application/use-cases/GetProductDetailsUseCase");
describe('ExpressApp Integration', () => {
    let app;
    beforeAll(() => {
        const repository = new InMemoryProductRepository_1.InMemoryProductRepository();
        const useCase = new GetProductDetailsUseCase_1.GetProductDetailsUseCase(repository);
        const expressApp = new ExpressApp_1.ExpressApp(useCase);
        app = expressApp.app;
    });
    it('should return product details for a valid product ID', async () => {
        const response = await (0, supertest_1.default)(app).get('/api/v1/products/MLA123456789');
        expect(response.status).toBe(200);
        expect(response.body.data.success).toBe(true);
        expect(response.body.data.data.product).toHaveProperty('id', 'MLA123456789');
    });
    it('should return 404 when product is not found', async () => {
        const response = await (0, supertest_1.default)(app).get('/api/v1/products/MLA000000000');
        expect(response.status).toBe(404);
        expect(response.body.error.code).toBe('PRODUCT_NOT_FOUND');
    });
    it('should return 400 when product ID is missing', async () => {
        const response = await (0, supertest_1.default)(app).get('/api/v1/products/');
        expect(response.status).toBe(404);
    });
});
//# sourceMappingURL=ExpressApp.spec.js.map