import { InMemoryProductRepository } from '@infrastructure/adapters/outbound/persistence/InMemoryProductRepository';
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
import { ProductCondition } from '@domain/value-objects/ProductCondition';
import { ProductRating } from '@domain/value-objects/ProductRating';
import { ProductSpecs } from '@domain/value-objects/ProductSpecs';
import { ProductVariant } from '@domain/value-objects/ProductVariant';

describe('InMemoryProductRepository', () => {
  let repository: InMemoryProductRepository;

  beforeEach(() => {
    repository = new InMemoryProductRepository();
  });

  it('should return a product when it exists', async () => {
    const productId = new ProductId('MLA123456789');
    const product = await repository.findById(productId);

    expect(product).not.toBeNull();
    expect(product?.id.value).toBe('MLA123456789');
  });

  it('should return null when the product does not exist', async () => {
    const productId = new ProductId('MLA000000000');
    const product = await repository.findById(productId);

    expect(product).toBeNull();
  });

  it('should save a new product and retrieve it', async () => {
    const newProduct = new Product(
      new ProductId('MLA111111111'),
      new ProductTitle('Test Product'),
      new ProductDescription('Description for Test Product'),
      new Money(199.99, 'USD', 0),
      [new ProductImage('https://example.com/test.jpg')],
      new Seller(
        new SellerId('55555'),
        new SellerName('Test Seller'),
        new SellerStatus('BASICO'),
        new SellerMetrics(10, 50),
        new SellerReputation(4.2),
        'https://example.com/logo.jpg'
      ),
      new ShippingInfo(new Money(10, 'USD', 0), false, '5 días'),
      new Availability(10, true),
      new ProductCondition('Nuevo'),
      new ProductRating(4.3),
      10,
      ['Fact 1', 'Fact 2'],
      [new ProductSpecs({ label: 'Spec', value: 'Value' })],
      [
        new ProductVariant({
          id: 'VAR500',
          color: 'Rojo',
          storage: '128GB',
          price: 199.99,
          images: [new ProductImage('https://example.com/test.jpg')],
          stock: 5,
        }),
      ]
    );

    await repository.save(newProduct);

    const fetchedProduct = await repository.findById(newProduct.id);
    expect(fetchedProduct).not.toBeNull();
    expect(fetchedProduct?.title.value).toBe('Test Product');
  });
});
