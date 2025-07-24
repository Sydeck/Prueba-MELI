import { GetProductDetailsUseCase } from '@application/use-cases/GetProductDetailsUseCase';
import { ProductRepository } from '@application/ports/outbound/ProductRepository';
import { Product } from '@domain/entities/Product';
import { ProductId } from '@domain/value-objects/ProductId';
import { ValidationException } from '@domain/exceptions';

describe('GetProductDetailsUseCase', () => {
  let productRepositoryMock: jest.Mocked<ProductRepository>;
  let useCase: GetProductDetailsUseCase;

  beforeEach(() => {
    productRepositoryMock = {
      findById: jest.fn(),
      save: jest.fn(),
    };
    useCase = new GetProductDetailsUseCase(productRepositoryMock);
  });

  it('should return product details for a valid product ID', async () => {
    // Arrange
    const productMock = {
      id: new ProductId('MLA123456789'),
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
    } as unknown as Product;

    productRepositoryMock.findById.mockResolvedValue(productMock);

    // Act
    const response = await useCase.execute({ productId: 'MLA123456789' });

    // Assert
    expect(response.success).toBe(true);
    expect(response.data?.product.title).toBe('Test Product');
    expect(productRepositoryMock.findById).toHaveBeenCalledWith(new ProductId('MLA123456789'));
  });

  it('should throw ValidationException for invalid product ID', async () => {
    await expect(useCase.execute({ productId: 'INVALID' })).rejects.toThrow(ValidationException);
  });

  it('should throw ValidationException when product not found', async () => {
    productRepositoryMock.findById.mockResolvedValue(null);
    await expect(useCase.execute({ productId: 'MLA987654321' })).rejects.toThrow(
      ValidationException
    );
  });

  it('should throw ValidationException on unexpected error', async () => {
    productRepositoryMock.findById.mockRejectedValue(new Error('Unexpected Error'));
    await expect(useCase.execute({ productId: 'MLA123456789' })).rejects.toThrow(
      ValidationException
    );
  });
});
