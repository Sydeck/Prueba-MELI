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
import { ProductCondition } from '@domain/value-objects/ProductCondition';
import { ProductRating } from '@domain/value-objects/ProductRating';
import { ProductSpecs } from '@domain/value-objects/ProductSpecs';
import { ProductVariant } from '@domain/value-objects/ProductVariant';

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
    /** Samsung Galaxy A54 */
    const samsungImages = [
      new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_828877-MLU54983902171_052023-F.webp'),
      new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_929123-MLU80276924341_102024-F.webp'),
      new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_812038-MLA74676703594_022024-F.webp'),
      new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_929123-MLU80276924341_102024-F.webp'),
    ];
    const samsungSeller = new Seller(
      new SellerId('12345'),
      new SellerName('Samsung'),
      new SellerStatus('TIENDA_OFICIAL'),
      new SellerMetrics(1000, 50000),
      new SellerReputation(4.8),
      'https://http2.mlstatic.com/D_NQ_NP_988300-MLA81040243606_122024-T.webp'
    );

    const galaxyProduct = new Product(
      new ProductId('MLA123456789'),
      new ProductTitle('Samsung Galaxy A54 5G 256 GB'),
      new ProductDescription('Latest smartphone with advanced features and 5G connectivity'),
      new Money(439.99, 'USD', 12),
      samsungImages,
      samsungSeller,
      new ShippingInfo(new Money(0, 'USD', 0), true, '2-3 días'),
      new Availability(15, true),
      new ProductCondition('Nuevo'),
      new ProductRating(4.6),
      1200,
      [
        'Pantalla AMOLED de 6.4"',
        'Procesador Octa-core',
        'Batería de 5000 mAh',
        'Cámara principal 50 MP',
      ],
      [
        new ProductSpecs({ label: 'RAM', value: '8 GB' }),
        new ProductSpecs({ label: 'Almacenamiento', value: '256 GB' }),
        new ProductSpecs({ label: 'Color', value: 'Negro' }),
      ],
      [
        new ProductVariant({
          id: 'VAR123',
          color: 'Negro',
          storage: '256GB',
          price: 439.99,
          images: samsungImages.map(img => new ProductImage(img.url)),
          stock: 10,
        }),
      ]
    );

    /** Nothing Phone */
    const nothingImages = [
      new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_676234-MLA85338913814_062025-F.webp'),
      new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_790769-MLA85340775002_062025-F.webp'),
    ];
    const nothingSeller = new Seller(
      new SellerId('67890'),
      new SellerName('NOTHING TECH'),
      new SellerStatus('TIENDA_OFICIAL'),
      new SellerMetrics(50, 50000),
      new SellerReputation(4.5),
      'https://http2.mlstatic.com/D_NQ_NP_988300-MLA81040243606_122024-T.webp'
    );

    const nothingProduct = new Product(
      new ProductId('MLA987654321'),
      new ProductTitle('Nothing Phone 3A Pro 12GB RAM 256GB ROM'),
      new ProductDescription(
        'El Nothing Phone (3a) Pro redefine el diseño de los smartphones con su icónico cuerpo transparente...'
      ),
      new Money(599.99, 'USD', 15),
      nothingImages,
      nothingSeller,
      new ShippingInfo(new Money(25, 'USD', 0), false, '3-5 días'),
      new Availability(8, true),
      new ProductCondition('Nuevo'),
      new ProductRating(4.7),
      125,
      [
        'Diseño transparente con interfaz Glyph',
        'Procesador Snapdragon 7s Gen 3',
        'Pantalla AMOLED de 6.77"',
      ],
      [
        new ProductSpecs({ label: 'Marca', value: 'Nothing' }),
        new ProductSpecs({ label: 'Modelo', value: 'Phone (3a) Pro' }),
        new ProductSpecs({ label: 'Memoria RAM', value: '12 GB' }),
        new ProductSpecs({ label: 'Almacenamiento', value: '256 GB' }),
      ],
      [
        new ProductVariant({
          id: 'VAR200',
          color: 'Negro',
          storage: '256GB',
          price: 599.99,
          images: nothingImages.map(img => new ProductImage(img.url)),
          stock: 8,
        }),
        new ProductVariant({
          id: 'VAR201',
          color: 'Gris',
          storage: '256GB',
          price: 599.99,
          images: nothingImages.map(img => new ProductImage(img.url)),
          stock: 5,
        }),
      ]
    );

    /** iPhone 15 */
    const iphoneImages = [
      new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_912227-MLA71782903150_092023-F.webp'),
    ];
    const appleSeller = new Seller(
      new SellerId('99999'),
      new SellerName('Apple Store'),
      new SellerStatus('TIENDA_OFICIAL'),
      new SellerMetrics(2000, 100000),
      new SellerReputation(4.9),
      'https://upload.wikimedia.org/apple_logo.png'
    );

    const iphoneProduct = new Product(
      new ProductId('MLA555666777'),
      new ProductTitle('iPhone 15 Pro Max 256GB'),
      new ProductDescription('Latest iPhone with titanium design and advanced camera system'),
      new Money(1199.99, 'USD', 5),
      iphoneImages,
      appleSeller,
      new ShippingInfo(new Money(0, 'USD', 0), true, '1-2 días'),
      new Availability(25, true),
      new ProductCondition('Nuevo'),
      new ProductRating(4.9),
      5000,
      ['Diseño de titanio', 'Cámara de 48 MP', 'Chip A17 Pro'],
      [
        new ProductSpecs({ label: 'RAM', value: '8 GB' }),
        new ProductSpecs({ label: 'Almacenamiento', value: '256 GB' }),
        new ProductSpecs({ label: 'Color', value: 'Titanio Azul' }),
      ],
      [
        new ProductVariant({
          id: 'VAR300',
          color: 'Titanio Azul',
          storage: '256GB',
          price: 1199.99,
          images: iphoneImages.map(img => new ProductImage(img.url)),
          stock: 25,
        }),
      ]
    );

    /** Save products */
    this.products.set(galaxyProduct.id.value, galaxyProduct);
    this.products.set(nothingProduct.id.value, nothingProduct);
    this.products.set(iphoneProduct.id.value, iphoneProduct);
  }
}
