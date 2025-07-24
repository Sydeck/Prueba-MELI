import {
  GetProductDetailsRequest,
  GetProductDetailsResponse,
} from '@application/dto/ProductDetailsDto';

export interface GetProductDetailsPort {
  execute(request: GetProductDetailsRequest): Promise<GetProductDetailsResponse>;
}
