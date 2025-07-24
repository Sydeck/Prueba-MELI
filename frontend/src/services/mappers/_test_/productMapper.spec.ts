import { mapProductDto } from '../productMapper';
import { ProductDetailsDto } from '@/types/product.types';

describe('mapProductDto', () => {
  it('should map a fully populated DTO without changes', () => {
    const input: ProductDetailsDto = {
      product: {
        id: '1',
        title: 'Test Product',
        description: 'Desc',
        condition: 'Nuevo',
        price: { amount: 100, currency: 'USD', discount: 10, formatted: '$100' },
        images: ['img1'],
        rating: 4.5,
        reviews: 10,
        facts: ['Fact1'],
        specs: [{ label: 'Spec1', value: 'Value1' }],
        variants: [{ id: 'var1', color: 'Red', storage: '64GB', price: 200, images: [], stock: 5 }],
      },
      seller: {
        id: 's1',
        name: 'Seller',
        brandLogo: 'logo.png',
        status: 'GOLD',
        reputation: 4.8,
        metrics: { totalProducts: 10, totalSales: 100 },
      },
      shipping: { cost: 0, isFree: true, estimatedDeliveryDays: '2-3 días' },
      availability: { stock: 5, available: true },
    };

    const result = mapProductDto(input);
    expect(result).toEqual(input);
  });

  it('should map with default values when fields are undefined', () => {
    const input: ProductDetailsDto = {
      product: {
        id: '1',
        title: undefined as any,
        description: undefined as any,
        condition: undefined as any,
        price: undefined as any,
        images: undefined as any,
        rating: undefined as any,
        reviews: undefined as any,
        facts: undefined as any,
        specs: undefined as any,
        variants: undefined as any,
      },
      seller: {
        id: undefined as any,
        name: undefined as any,
        brandLogo: undefined as any,
        status: undefined as any,
        reputation: undefined as any,
        metrics: undefined as any,
      },
      shipping: {
        cost: undefined as any,
        isFree: undefined as any,
        estimatedDeliveryDays: undefined as any,
      },
      availability: { stock: undefined as any, available: undefined as any },
    };

    const result = mapProductDto(input);

    expect(result.product.title).toBe('');
    expect(result.product.description).toBe('');
    expect(result.product.condition).toBe('Desconocido');
    expect(result.product.price).toEqual({
      amount: 0,
      currency: '',
      discount: 0,
      formatted: '$0.00',
    });
    expect(result.product.images).toEqual([]);
    expect(result.product.facts).toEqual([]);
    expect(result.product.specs).toEqual([]);
    expect(result.product.variants).toEqual([]);
    expect(result.product.rating).toBe(0);
    expect(result.product.reviews).toBe(0);

    expect(result.seller.id).toBe('');
    expect(result.seller.name).toBe('Desconocido');
    expect(result.seller.metrics).toEqual({ totalProducts: 0, totalSales: 0 });

    expect(result.shipping.estimatedDeliveryDays).toBe('No disponible');
    expect(result.availability.stock).toBe(0);
    expect(result.availability.available).toBe(false);
  });
});
