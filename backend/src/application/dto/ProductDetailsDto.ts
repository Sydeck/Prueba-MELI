/**
 * Data transfer object for product details API
 */

export interface ProductDetailsDto {
  id: string;
  title: string;
  description: string;
  price: {
    amount: number;
    currency: string;
    discount: number;
    formatted: string;
  };
  images: string[];
  seller: {
    id: string;
    name: string;
    status: string;
    reputation: number | null;
    metrics: {
      totalProducts: number;
      totalSales: number;
    };
    shipping: {
      cost: number;
      isFree: boolean;
      available: boolean;
    };
    availability: {
      stock: number;
      available: boolean;
    };
  };
}

export interface getProductDetailsRequest {
  productId: string;
}

export interface getProductDetailResponse {
  success: boolean;
  data: ProductDetailsDto | null;
}
