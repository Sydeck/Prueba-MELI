/**
 * Interface for each type of VO
 */

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
export interface Product {
  id: string;
  title: string;
  description: string;
  price: Price;
  images: string[];
  seller: Seller;
  shipping: Shipping;
  availability: Availability;
}
