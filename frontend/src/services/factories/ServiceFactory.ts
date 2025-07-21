import { ApiConfig } from '../api/ApiConfig';
import { IHttpClient, AxiosHttpClient } from '../api/httpClient';
import { IProductRepository, ProductRepository } from '../repositories/ProductRepository';

export class ServiceFactory {
  private static instance: ServiceFactory;

  private config?: ApiConfig;
  private httpClient?: IHttpClient;
  private productRepository?: IProductRepository;

  private constructor() {}

  /**
   * Singleton instance
   */
  static getInstance(): ServiceFactory {
    if (!ServiceFactory.instance) {
      ServiceFactory.instance = new ServiceFactory();
    }
    return ServiceFactory.instance;
  }

  /**
   * Get the API configuration
   */
  getApiConfig(): ApiConfig {
    if (!this.config) {
      this.config = new ApiConfig();
    }
    return this.config;
  }

  /**
   * Get the HTTP client
   */
  getHttpClient(): IHttpClient {
    if (!this.httpClient) {
      const config = this.getApiConfig();
      this.httpClient = new AxiosHttpClient(config);
    }
    return this.httpClient;
  }

  /**
   * Get the product repository
   */
  getProductRepository(): IProductRepository {
    if (!this.productRepository) {
      const httpClient = this.getHttpClient();
      const config = this.getApiConfig();
      this.productRepository = new ProductRepository(httpClient, config);
    }
    return this.productRepository;
  }

  /**
   * Reset the service factory
   */
  reset(): void {
    this.config = undefined;
    this.httpClient = undefined;
    this.productRepository = undefined;
  }

  /**
   * Factory method for testing with mocks
   */
  static createWithMocks(mockHttpClient?: IHttpClient, mockConfig?: ApiConfig): ServiceFactory {
    const factory = new ServiceFactory();

    if (mockConfig) {
      factory.config = mockConfig;
    }

    if (mockHttpClient) {
      factory.httpClient = mockHttpClient;
    }

    if (mockHttpClient || mockConfig) {
      const config = mockConfig || factory.getApiConfig();
      const httpClient = mockHttpClient || factory.getHttpClient();
      factory.productRepository = new ProductRepository(httpClient, config);
    }

    return factory;
  }
}

export const serviceFactory = ServiceFactory.getInstance();

export const apiConfig = serviceFactory.getApiConfig();
export const httpClient = serviceFactory.getHttpClient();
export const productRepository = serviceFactory.getProductRepository();
