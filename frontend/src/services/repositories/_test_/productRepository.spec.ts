import { ProductRepository } from '../productRepository';
import { IHttpClient } from '../../api/httpClient';
import { ApiConfig } from '../../api/apiConfig';
import { ProductDetailsDto } from '@/types/product.types';
import { ApiSuccessWrapper, HealthCheckResponse } from '@/types/api.types';

jest.mock('../../validators/ProductValidator', () => ({
  ProductValidator: {
    validateId: jest.fn(),
  },
}));

describe('ProductRepository', () => {
  let httpClientMock: jest.Mocked<IHttpClient>;
  let configMock: jest.Mocked<ApiConfig>;
  let repository: ProductRepository;

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    } as any;

    configMock = {
      buildEndpoint: jest.fn((template, params) => `/mock-endpoint/${params?.id || ''}`),
      endpoints: { product: { getById: '/products/:id' }, system: { health: '/health' } },
    } as any;

    repository = new ProductRepository(httpClientMock, configMock);
  });

  describe('getById', () => {
    it('should call httpClient with the correct endpoint and return product data', async () => {
      const mockProduct: ProductDetailsDto = {
        product: {
          id: '1',
          title: 'Test',
          description: '',
          condition: '',
          price: { amount: 0, currency: '', discount: 0, formatted: '' },
          images: [],
          rating: 0,
          reviews: 0,
          facts: [],
          specs: [],
          variants: [],
        },
        seller: {
          id: 's1',
          name: '',
          brandLogo: '',
          status: '',
          reputation: 0,
          metrics: { totalProducts: 0, totalSales: 0 },
        },
        shipping: { cost: 0, isFree: false, estimatedDeliveryDays: '' },
        availability: { stock: 0, available: false },
      };
      httpClientMock.get.mockResolvedValue({ data: { success: true, data: mockProduct } });

      const result = await repository.getById('1');

      expect(configMock.buildEndpoint).toHaveBeenCalledWith('/products/:id', { id: '1' });
      expect(httpClientMock.get).toHaveBeenCalledWith('/mock-endpoint/1');
      expect(result).toEqual(mockProduct);
    });

    it('should throw error if response success is false or data is null', async () => {
      httpClientMock.get.mockResolvedValue({ data: { success: false, data: null } });

      await expect(repository.getById('1')).rejects.toThrow('invalid response from the server');
    });

    it('should enrich error message when httpClient throws', async () => {
      httpClientMock.get.mockRejectedValue(new globalThis.Error('Network fail'));

      await expect(repository.getById('1')).rejects.toThrow(
        'Failed to fetch product 1: Network fail'
      );
    });
  });

  describe('healthCheck', () => {
    it('should return response if status exists', async () => {
      const mockHealth: HealthCheckResponse = { status: 'OK' };
      httpClientMock.get.mockResolvedValue(mockHealth);

      const result = await repository.healthCheck();

      expect(configMock.buildEndpoint).toHaveBeenCalledWith('/health');
      expect(result).toEqual(mockHealth);
    });

    it('should throw error if status is missing', async () => {
      httpClientMock.get.mockResolvedValue({});

      await expect(repository.healthCheck()).rejects.toThrow('invalid response from the server');
    });

    it('should enrich error message when httpClient throws', async () => {
      httpClientMock.get.mockRejectedValue(new globalThis.Error('Timeout'));

      await expect(repository.healthCheck()).rejects.toThrow('Health check failed: Timeout');
    });
  });
});
