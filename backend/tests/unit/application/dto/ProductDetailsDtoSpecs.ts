import {
  ProductDetailsDto,
  GetProductDetailsResponse,
} from '../../../../src/application/dto/ProductDetailsDto';

describe('ProductDetailsDto', () => {
  const mockDto: ProductDetailsDto = {
    product: {
      id: 'MLA123456789',
      title: 'Samsung Galaxy A54',
      description: 'High performance smartphone',
      condition: 'Nuevo',
      price: {
        amount: 439.99,
        currency: 'USD',
        discount: 10,
        formatted: '$439.99',
      },
      images: ['https://example.com/image1.jpg'],
      rating: 4.5,
      reviews: 1200,
      facts: ['AMOLED screen', '5000mAh battery'],
      specs: [
        { label: 'RAM', value: '8 GB' },
        { label: 'Storage', value: '256 GB' },
      ],
      variants: [
        {
          id: 'VAR123',
          color: 'Negro',
          storage: '256GB',
          price: 439.99,
          images: ['https://example.com/image1.jpg'],
          stock: 10,
        },
      ],
    },
    seller: {
      id: '12345',
      name: 'Samsung Official',
      brandLogo: 'https://example.com/logo.png',
      status: 'TIENDA_OFICIAL',
      reputation: 4.8,
      metrics: {
        totalProducts: 1000,
        totalSales: 50000,
      },
    },
    shipping: {
      cost: 0,
      isFree: true,
      estimatedDeliveryDays: '2-3 días',
    },
    availability: {
      stock: 15,
      available: true,
    },
  };

  it('should create a valid ProductDetailsDto object', () => {
    expect(mockDto).toHaveProperty('product');
    expect(mockDto).toHaveProperty('seller');
    expect(mockDto).toHaveProperty('shipping');
    expect(mockDto).toHaveProperty('availability');
  });

  it('should have correct product properties', () => {
    const product = mockDto.product;
    expect(product.id).toBe('MLA123456789');
    expect(product.price).toMatchObject({
      amount: 439.99,
      currency: 'USD',
      formatted: '$439.99',
    });
    expect(product.variants[0].images.length).toBeGreaterThan(0);
  });

  it('should allow a GetProductDetailsResponse with data', () => {
    const response: GetProductDetailsResponse = {
      success: true,
      data: mockDto,
    };
    expect(response.success).toBe(true);
    expect(response.data?.product.title).toBe('Samsung Galaxy A54');
  });

  it('should allow a GetProductDetailsResponse with null data', () => {
    const response: GetProductDetailsResponse = {
      success: false,
      data: null,
    };
    expect(response.success).toBe(false);
    expect(response.data).toBeNull();
  });
});
