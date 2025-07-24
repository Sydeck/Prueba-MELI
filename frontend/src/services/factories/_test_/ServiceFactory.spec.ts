import { ServiceFactory } from '../ServiceFactory';
import { ApiConfig } from '../../api/apiConfig';
import { IHttpClient } from '../../api/httpClient';
import { IProductRepository } from '../../repositories/productRepository';

describe('ServiceFactory', () => {
  beforeEach(() => {
    ServiceFactory.getInstance().reset();
  });

  it('should return the same singleton instance', () => {
    const instance1 = ServiceFactory.getInstance();
    const instance2 = ServiceFactory.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should lazily initialize ApiConfig', () => {
    const factory = ServiceFactory.getInstance();
    const config1 = factory.getApiConfig();
    const config2 = factory.getApiConfig();
    expect(config1).toBeInstanceOf(ApiConfig);
    expect(config1).toBe(config2); // misma instancia
  });

  it('should lazily initialize HttpClient', () => {
    const factory = ServiceFactory.getInstance();
    const client1 = factory.getHttpClient();
    const client2 = factory.getHttpClient();
    expect(client1).toBe(client2);
    expect(typeof client1.get).toBe('function');
  });

  it('should lazily initialize ProductRepository', () => {
    const factory = ServiceFactory.getInstance();
    const repo1 = factory.getProductRepository();
    const repo2 = factory.getProductRepository();
    expect(repo1).toBe(repo2);
    expect(typeof repo1.getById).toBe('function');
  });

  it('should reset and reinitialize dependencies', () => {
    const factory = ServiceFactory.getInstance();
    const initialConfig = factory.getApiConfig();
    factory.reset();
    const newConfig = factory.getApiConfig();
    expect(newConfig).not.toBe(initialConfig); // Nueva instancia
  });

  it('should create a factory with mocks', () => {
    const mockHttpClient: IHttpClient = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    };
    const mockConfig = new ApiConfig();
    const mockFactory = ServiceFactory.createWithMocks(mockHttpClient, mockConfig);
    const repo = mockFactory.getProductRepository();
    expect(repo).toBeDefined();
    expect(mockFactory.getHttpClient()).toBe(mockHttpClient);
    expect(mockFactory.getApiConfig()).toBe(mockConfig);
  });
});
