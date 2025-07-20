import { ProductRepository } from '@application/ports/outbound/ProductRepository';
import { Product } from '@domain/entities/Product';
import { ProductId } from '@domain/value-objects/ProductId';
import { ProductTitle } from '@domain/value-objects/ProductTitle';
import { ProductDescription } from '@domain/value-objects/ProductDescription';
import { ProductImage } from '@domain/value-objects/ProductImage';
import { Money } from '@domain/value-objects/Money';
import { Seller } from '@domain/entities/Seller';
import { SellerId } from '@domain/value-objects/SellerId';
import { SellerStatus } from '@domain/value-objects/SellerStatus';
import { SellerName } from '@domain/value-objects/SellerName';
import { SellerMetrics } from '@domain/value-objects/SellerMetrics';
import { SellerReputation } from '@domain/value-objects/SellerReputation';
import { ShippingInfo } from '@domain/value-objects/ShippingInfo';
import { Availability } from '@domain/value-objects/Availability';

/**
 * In memory Implementation of Product Repository whit fake data
 */

export class InMemoryProductRepository implements ProductRepository {
  private products: Map<string, Product> = new Map();

  constructor() {
    this.seedFakeData();
  }

  async findById(id: ProductId): Promise<Product | null> {
    return this.products.get(id.value) || null;
  }

  async save(product: Product): Promise<void> {
    this.products.set(product.id.value, product);
  }

  private seedFakeData(): void {
    // Samsung Galaxy A54
    const samsungSeller = new Seller(
      new SellerId('12345'),
      new SellerName('Samsung'),
      new SellerStatus('TIENDA_OFICIAL'),
      new SellerMetrics(1000, 50000),
      new SellerReputation(4.8)
    );

    const galaxyProduct = new Product(
      new ProductId('MLA123456789'),
      new ProductTitle('Samsung Galaxy A54 5G 256 GB'),
      new ProductDescription('Latest smartphone with advanced features and 5G connectivity'),
      new Money(439.99, 'USD', 12),
      [
        new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_123456-MLA.webp'),
        new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_654321-MLA.webp'),
      ],
      samsungSeller,
      new ShippingInfo(new Money(0, 'USD', 0), true, '2-3 días'),
      new Availability(15, true)
    );

    // Nothing Phone
    const nothingSeller = new Seller(
      new SellerId('67890'),
      new SellerName('NOTHING TECH'),
      new SellerStatus('TIENDA_OFICIAL'),
      new SellerMetrics(50, 50000),
      new SellerReputation(4.5)
    );

    const nothingProduct = new Product(
      new ProductId('MLA987654321'),
      new ProductTitle('Nothing Phone 3A Pro 12GB RAM 256GB ROM'),
      new ProductDescription('Revolutionary smartphone with unique transparent design'),
      new Money(599.99, 'USD', 15),
      [new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_987654-MLA.webp')],
      nothingSeller,
      new ShippingInfo(new Money(25, 'USD', 0), false, '3-5 días'),
      new Availability(8, true)
    );

    // iPhone 15
    const appleSeller = new Seller(
      new SellerId('99999'),
      new SellerName('Apple Store'),
      new SellerStatus('TIENDA_OFICIAL'),
      new SellerMetrics(2000, 100000),
      new SellerReputation(4.9)
    );

    const iphoneProduct = new Product(
      new ProductId('MLA555666777'),
      new ProductTitle('iPhone 15 Pro Max 256GB'),
      new ProductDescription('Latest iPhone with titanium design and advanced camera system'),
      new Money(1199.99, 'USD', 5),
      [new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_555666-MLA.webp')],
      appleSeller,
      new ShippingInfo(new Money(0, 'USD', 0), true, '1-2 días'),
      new Availability(25, true)
    );

    /**
     * Save products in memory
     */
    this.products.set(galaxyProduct.id.value, galaxyProduct);
    this.products.set(nothingProduct.id.value, nothingProduct);
    this.products.set(iphoneProduct.id.value, iphoneProduct);
  }
}
