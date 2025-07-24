/**
 * Data transfer object for product details API
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  condition: string;
  price: Price;
  images: string[];
  rating: number;
  reviews: number;
  facts: string[];
  specs: ProductSpec[];
  variants: ProductVariant[];
}
export interface ProductVariant {
  id: string;
  color: string;
  storage: string;
  price: number;
  images: string[];
  stock: number;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Price {
  amount: number;
  currency: string;
  discount: number;
  formatted: string;
}

export interface SellerMetrics {
  totalProducts: number;
  totalSales: number;
}
export interface Seller {
  id: string;
  name: string;
  brandLogo: string;
  status: string;
  reputation: number | null;
  metrics: SellerMetrics;
}
export interface Shipping {
  cost: number;
  isFree: boolean;
  estimatedDeliveryDays: string;
}

export interface Availability {
  stock: number;
  available: boolean;
}
export interface ProductDetailsDto {
  product: Product;
  seller: Seller;
  shipping: Shipping;
  availability: Availability;
}

export interface GetProductDetailsRequest {
  productId: string;
}

export interface GetProductDetailsResponse {
  success: boolean;
  data: ProductDetailsDto | null;
}
