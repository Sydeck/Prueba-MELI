"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetProductDetailsUseCase_1 = require("@application/use-cases/GetProductDetailsUseCase");
const ProductId_1 = require("@domain/value-objects/ProductId");
const exceptions_1 = require("@domain/exceptions");
describe('GetProductDetailsUseCase', () => {
    let productRepositoryMock;
    let useCase;
    beforeEach(() => {
        productRepositoryMock = {
            findById: jest.fn(),
            save: jest.fn(),
        };
        useCase = new GetProductDetailsUseCase_1.GetProductDetailsUseCase(productRepositoryMock);
    });
    it('should return product details for a valid product ID', async () => {
        const productMock = {
            id: new ProductId_1.ProductId('MLA123456789'),
            title: { value: 'Test Product' },
            description: { value: 'Test Description' },
            condition: { value: 'Nuevo' },
            price: { amount: 100, currency: 'USD', discount: 0, formatForDisplay: jest.fn(() => '$100') },
            images: [{ url: 'https://image.com/img.png' }],
            rating: { value: 4.5 },
            reviews: 10,
            facts: ['Feature 1', 'Feature 2'],
            specs: [{ label: 'RAM', specValue: '8 GB' }],
            variants: [
                {
                    value: {
                        id: 'VAR1',
                        color: 'Black',
                        storage: '256GB',
                        price: 100,
                        images: [{ url: 'https://image.com/var.png' }],
                        stock: 5,
                    },
                },
            ],
            seller: {
                id: { value: '123' },
                name: { value: 'Seller Name' },
                brandLogo: 'https://logo.com/seller.png',
                status: { value: 'PLATINUM' },
                reputation: { score: 4.8 },
                metrics: { totalProducts: 100, totalSales: 500 },
            },
            shipping: { cost: { amount: 0 }, isFree: true, estimatedDeliveryDays: '2-3 días' },
            availability: { stock: 10, isAvailable: true },
        };
        productRepositoryMock.findById.mockResolvedValue(productMock);
        const response = await useCase.execute({ productId: 'MLA123456789' });
        expect(response.success).toBe(true);
        expect(response.data?.product.title).toBe('Test Product');
        expect(productRepositoryMock.findById).toHaveBeenCalledWith(new ProductId_1.ProductId('MLA123456789'));
    });
    it('should throw ValidationException for invalid product ID', async () => {
        await expect(useCase.execute({ productId: 'INVALID' })).rejects.toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException when product not found', async () => {
        productRepositoryMock.findById.mockResolvedValue(null);
        await expect(useCase.execute({ productId: 'MLA987654321' })).rejects.toThrow(exceptions_1.ValidationException);
    });
    it('should throw ValidationException on unexpected error', async () => {
        productRepositoryMock.findById.mockRejectedValue(new Error('Unexpected Error'));
        await expect(useCase.execute({ productId: 'MLA123456789' })).rejects.toThrow(exceptions_1.ValidationException);
    });
});
//# sourceMappingURL=GetProductDetailsUseCase.spec.js.map