import {
  getProductDetailsRequest,
  getProductDetailResponse,
} from '@application/dto/ProductDetailsDto';

export interface GetProductDetailsPort {
  execute(request: getProductDetailsRequest): Promise<getProductDetailResponse>;
}
