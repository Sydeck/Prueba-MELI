import { Request, Response, NextFunction } from 'express';
import { ProductController } from '@infrastructure/adapters/inbound/http/ProductController';
import { GetProductDetailsUseCase } from '@application/use-cases/GetProductDetailsUseCase';
import { GetProductDetailsResponse } from '@application/dto/ProductDetailsDto';

describe('ProductController', () => {
  let controller: ProductController;
  let useCaseMock: jest.Mocked<GetProductDetailsUseCase>;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    useCaseMock = { execute: jest.fn() } as any;
    controller = new ProductController(useCaseMock);

    req = { params: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it('should return 400 if product ID is missing', async () => {
    req.params = { id: '' };

    await controller.getProductDetails(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({ code: 'MISSING_PRODUCT_ID' }),
      })
    );
  });

  it('should return product details for valid ID', async () => {
    req.params = { id: 'MLA123456789' };

    const mockResponse: GetProductDetailsResponse = {
      success: true,
      data: {
        product: {
          id: 'MLA123456789',
          title: 'Test Product',
          description: 'Product description',
          condition: 'Nuevo',
          price: { amount: 100, currency: 'USD', discount: 0, formatted: '$100' },
          images: ['https://example.com/image.jpg'],
          rating: 4.5,
          reviews: 10,
          facts: ['Fact 1', 'Fact 2'],
          specs: [{ label: 'Spec1', value: 'Value1' }],
          variants: [
            {
              id: 'VAR1',
              color: 'Negro',
              storage: '128GB',
              price: 100,
              images: ['https://example.com/image.jpg'],
              stock: 5,
            },
          ],
        },
        seller: {
          id: '1',
          name: 'Test Seller',
          brandLogo: 'https://example.com/logo.jpg',
          status: 'PLATINUM',
          reputation: 4.8,
          metrics: { totalProducts: 10, totalSales: 200 },
        },
        shipping: { cost: 0, isFree: true, estimatedDeliveryDays: '1-2 días' },
        availability: { stock: 10, available: true },
      },
    };

    useCaseMock.execute.mockResolvedValue(mockResponse);

    await controller.getProductDetails(req as Request, res as Response, next);

    expect(useCaseMock.execute).toHaveBeenCalledWith({ productId: 'MLA123456789' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        data: mockResponse,
        meta: expect.any(Object),
      })
    );
  });

  it('should call next on error', async () => {
    req.params = { id: 'MLA123456789' };
    const error = new Error('Test error');
    useCaseMock.execute.mockRejectedValue(error);

    await controller.getProductDetails(req as Request, res as Response, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
