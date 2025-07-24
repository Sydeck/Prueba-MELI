import { Product } from '@domain/entities/Product';
import { ProductId } from '@domain/value-objects/ProductId';

/**
 * Ports for product data persistence
 * Abstract data storage implementation
 */

export interface ProductRepository {
  findById(id: ProductId): Promise<Product | null>;
  save(product: Product): Promise<void>;
}
