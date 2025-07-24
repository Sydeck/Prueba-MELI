import { Product } from '@domain/entities/Product';
import { ProductId } from '@domain/value-objects/ProductId';
import { ProductTitle } from '@domain/value-objects/ProductTitle';
import { ProductDescription } from '@domain/value-objects/ProductDescription';
import { Money } from '@domain/value-objects/Money';
import { ProductImage } from '@domain/value-objects/ProductImage';
import { Seller } from '@domain/entities/Seller';
import { SellerId } from '@domain/value-objects/SellerId';
import { SellerName } from '@domain/value-objects/SellerName';
import { SellerStatus } from '@domain/value-objects/SellerStatus';
import { SellerMetrics } from '@domain/value-objects/SellerMetrics';
import { SellerReputation } from '@domain/value-objects/SellerReputation';
import { ShippingInfo } from '@domain/value-objects/ShippingInfo';
import { Availability } from '@domain/value-objects/Availability';
import { ProductCondition } from '@domain/value-objects/ProductCondition';
import { ProductRating } from '@domain/value-objects/ProductRating';
import { ProductSpecs } from '@domain/value-objects/ProductSpecs';
import { ProductVariant } from '@domain/value-objects/ProductVariant';
import { ValidationException } from '@domain/exceptions/ValidationException';

describe('Product entity', () => {
  const id = new ProductId('MLA123456789');
  const title = new ProductTitle('Test Product');
  const description = new ProductDescription('This is a test product description.');
  const price = new Money(100, 'USD', 0);
  const images = [new ProductImage('https://example.com/image.webp')];
  const seller = new Seller(
    new SellerId('123'),
    new SellerName('Official Store'),
    new SellerStatus('TIENDA_OFICIAL'),
    new SellerMetrics(100, 5000),
    new SellerReputation(4.8),
    'https://example.com/logo.png'
  );
  const shipping = new ShippingInfo(new Money(10, 'USD', 0), false, '2-4 days');
  const availability = new Availability(10, true);
  const condition = new ProductCondition('Nuevo');
  const rating = new ProductRating(4.5);
  const facts = ['Fact 1', 'Fact 2'];
  const specs = [new ProductSpecs({ label: 'RAM', value: '8 GB' })];
  const variants = [
    new ProductVariant({
      id: 'VAR1',
      color: 'Black',
      storage: '256GB',
      price: 100,
      images,
      stock: 10,
    }),
  ];

  it('should create a valid product', () => {
    const product = new Product(
      id,
      title,
      description,
      price,
      images,
      seller,
      shipping,
      availability,
      condition,
      rating,
      100,
      facts,
      specs,
      variants
    );

    expect(product.title.value).toBe('Test Product');
    expect(product.description.value).toContain('test product');
    expect(product.price.amount).toBe(100);
    expect(product.images.length).toBe(1);
    expect(product.seller.name.value).toBe('Official Store');
  });

  it('should calculate total cost including shipping', () => {
    const product = new Product(
      id,
      title,
      description,
      price,
      images,
      seller,
      shipping,
      availability,
      condition,
      rating,
      100,
      facts,
      specs,
      variants
    );

    const total = product.calculateTotalCost(1);
    expect(total.amount).toBe(110); // 100 product + 10 shipping
  });

  it('should throw if not enough stock', () => {
    const lowStock = new Availability(1, true);
    const product = new Product(
      id,
      title,
      description,
      price,
      images,
      seller,
      shipping,
      lowStock,
      condition,
      rating,
      100,
      facts,
      specs,
      variants
    );

    expect(() => product.calculateTotalCost(2)).toThrow(ValidationException);
  });
});
