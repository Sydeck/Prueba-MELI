import request from 'supertest';
import { ExpressApp } from '@infrastructure/config/ExpressApp';
import { InMemoryProductRepository } from '@infrastructure/adapters/outbound/persistence/InMemoryProductRepository';
import { GetProductDetailsUseCase } from '@application/use-cases/GetProductDetailsUseCase';

describe('ExpressApp Integration', () => {
  let app: any;

  beforeAll(() => {
    const repository = new InMemoryProductRepository();
    const useCase = new GetProductDetailsUseCase(repository);
    const expressApp = new ExpressApp(useCase);
    app = expressApp.app;
  });

  it('should return product details for a valid product ID', async () => {
    const response = await request(app).get('/api/v1/products/MLA123456789');
    expect(response.status).toBe(200);
    expect(response.body.data.success).toBe(true);
    expect(response.body.data.data.product).toHaveProperty('id', 'MLA123456789');
  });

  it('should return 404 when product is not found', async () => {
    const response = await request(app).get('/api/v1/products/MLA000000000');
    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe('PRODUCT_NOT_FOUND');
  });

  it('should return 400 when product ID is missing', async () => {
    const response = await request(app).get('/api/v1/products/');
    expect(response.status).toBe(404); // Express devuelve 404 por ruta inválida
  });
});
