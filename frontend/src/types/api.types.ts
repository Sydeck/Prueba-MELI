import { ProductDetailsDto } from './product.types';

/**
 * Response interface for backend
 */
export interface GetProductDetailsResponse {
  success: boolean;
  data: ProductDetailsDto | null;
}

export interface ApiSuccessWrapper {
  data: GetProductDetailsResponse;
  meta: {
    timestamp: string;
    version: string;
  };
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    timestamp: string;
  };
}

export interface HealthCheckResponse {
  status: string;
  timestamp: string;
  service: string;
}

export type ApiResponse = ApiSuccessWrapper | ApiError;
