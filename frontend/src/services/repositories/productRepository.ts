import { Product } from '@/types/product.types';
import { ApiSuccessWrapper, HealthCheckResponse } from '@/types/api.types';
import { IHttpClient } from '../api/httpClient';
import { ApiConfig } from '../api/apiConfig';
import { ProductValidator } from '../validators/ProductValidator';

export interface IProductRepository {
  getById(id: string): Promise<Product>;
  healthCheck(): Promise<HealthCheckResponse>;
}

export class ProductRepository implements IProductRepository {
  constructor(private httpClient: IHttpClient, private config: ApiConfig) {}

  /**
   * Get a product by its ID
   */
  async getById(productId: string): Promise<Product> {
    ProductValidator.validateId(productId);
    try {
      /**
       * Validate the product ID
       */
      const endpoint = this.config.buildEndpoint(this.config.endpoints.product.getById, {
        id: productId,
      });
      const response = await this.httpClient.get<ApiSuccessWrapper>(endpoint);
      if (!response.data.success || !response.data.data) {
        throw new globalThis.Error('invalid response from the server');
      }
      return response.data.data;
    } catch (error) {
      if (error instanceof globalThis.Error) {
        error.message = `Failed to fetch product ${productId}: ${error.message}`;
      }
      throw error;
    }
  }

  /**
   * Health check Service
   */
  async healthCheck(): Promise<HealthCheckResponse> {
    try {
      const endpoint = this.config.buildEndpoint(this.config.endpoints.system.health);
      const response = await this.httpClient.get<HealthCheckResponse>(endpoint);
      if (!response.status) {
        throw new globalThis.Error('invalid response from the server');
      }
      return response;
    } catch (error) {
      if (error instanceof globalThis.Error) {
        error.message = `Health check failed: ${error.message}`;
      }
      throw error;
    }
  }
}
