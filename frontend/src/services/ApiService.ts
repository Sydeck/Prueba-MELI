import { Product } from '@/types/product.types';
import { HealthCheckResponse } from '@/types/api.types';
import { ServiceFactory, productRepository } from './factories/ServiceFactory';
import { ErrorHandler } from './errors/ErrorHandler';

export class ApiService {
  /**
   * Get a product by its ID
   */
  static async getProductById(productId: string): Promise<Product> {
    try {
      const product = await productRepository.getById(productId);
      return product;
    } catch (error) {
      throw ErrorHandler.handleProductError(error);
    }
  }
  static async healthCheck(): Promise<HealthCheckResponse> {
    try {
      const response = await productRepository.healthCheck();
      return response;
    } catch (error) {
      throw ErrorHandler.handleApiError(error);
    }
  }

  static async isHealthy(): Promise<boolean> {
    try {
      const response = await productRepository.healthCheck();
      return response.status === 'OK';
    } catch (error) {
      return false;
    }
  }

  static getServiceFactory(): ServiceFactory {
    return ServiceFactory.getInstance();
  }
}

// Export convenience instances for direct usage
export { ServiceFactory };
export { productRepository, apiConfig, httpClient } from './factories/ServiceFactory';
export { ErrorHandler } from './errors/ErrorHandler';

// Default export for easy importing
export default ApiService;
