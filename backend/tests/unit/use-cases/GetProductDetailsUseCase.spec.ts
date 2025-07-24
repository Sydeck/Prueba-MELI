// tests/unit/application/GetProductDetailsUseCase/GetProductDetailsUseCase.spec.ts
import { InMemoryProductRepository } from '../../../src/infrastructure/adapters/outbound/persistence/InMemoryProductRepository';
import { GetProductDetailsUseCase } from '../../../src/application/use-cases/GetProductDetailsUseCase';
import { GetProductDetailsRequest } from '../../../src/application/dto/ProductDetailsDto';

describe('GetProductDetailsUseCase', () => {
  let useCase: GetProductDetailsUseCase;

  beforeAll(() => {
    const repository = new InMemoryProductRepository();
    useCase = new GetProductDetailsUseCase(repository);
  });

  it('should return product details for a valid ID', async () => {
    const request: GetProductDetailsRequest = { productId: 'MLA123456789' };
    const response = await useCase.execute(request);

    expect(response.success).toBe(true);
    expect(response.data).not.toBeNull();
    expect(response.data?.product.title).toBe('Samsung Galaxy A54 5G 256 GB');
    expect(response.data?.seller.name).toBe('Samsung');
    expect(response.data?.availability.stock).toBeGreaterThan(0);
  });

  it('should throw ValidationException for a non-existent product with valid ID format', async () => {
    const request: GetProductDetailsRequest = { productId: 'MLA000000000' }; // formato válido pero no existe
    await expect(useCase.execute(request)).rejects.toThrow('Product not found');
  });

  it('should throw ValidationException for an invalid ID format', async () => {
    const request: GetProductDetailsRequest = { productId: 'INVALID_ID' }; // formato inválido
    await expect(useCase.execute(request)).rejects.toThrow('Invalid product ID format');
  });
});
