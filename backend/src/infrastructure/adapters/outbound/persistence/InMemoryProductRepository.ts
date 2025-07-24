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
    /** Nothing Phone */
    const nothingImagesBase = [
      new ProductImage('https://http2.mlstatic.com/D_NQ_NP_2X_676234-MLA85338913814_062025-F.webp'),
    ];
    const nothingImagesBaseVariant = [
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
        'El Nothing Phone (3a) Pro es la variante de gama media‑alta de la serie 3a de Nothing Technology Limited, anunciada el 4 de marzo de 2025 y disponible desde el 11 de marzo de 2025. Destaca por su diseño semitransparente con interfaz Glyph, un marco de aluminio pulido y una parte trasera de policarbonato, que deja entrever ligeramente su electrónica interna. Su estética minimalista se combina con un rendimiento equilibrado y un software limpio basado en Android 15, mediante NothingOS 3.1'
      ),
      new Money(599.99, 'USD', 15),
      nothingImagesBase,
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
          images: nothingImagesBase.map(img => new ProductImage(img.url)),
          stock: 8,
        }),
        new ProductVariant({
          id: 'VAR201',
          color: 'Gris',
          storage: '256GB',
          price: 599.99,
          images: nothingImagesBaseVariant.map(img => new ProductImage(img.url)),
          stock: 5,
        }),
      ]
    );

    this.products.set(nothingProduct.id.value, nothingProduct);
  }
}
