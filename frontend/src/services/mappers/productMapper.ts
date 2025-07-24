import { ProductDetailsDto } from '@/types/product.types';

export function mapProductDto(dto: ProductDetailsDto): ProductDetailsDto {
  return {
    product: {
      ...dto.product,
      title: dto.product?.title ?? '',
      description: dto.product?.description ?? '',
      condition: dto.product?.condition ?? 'Desconocido',
      images: dto.product?.images ?? [],
      rating: dto.product?.rating ?? 0,
      reviews: dto.product?.reviews ?? 0,
      facts: dto.product?.facts ?? [],
      specs: dto.product?.specs ?? [],
      variants: dto.product?.variants ?? [],
      price: dto.product?.price ?? {
        amount: 0,
        currency: '',
        discount: 0,
        formatted: '$0.00',
      },
    },
    seller: {
      ...dto.seller,
      id: dto.seller?.id ?? '',
      name: dto.seller?.name ?? 'Desconocido',
      brandLogo: dto.seller?.brandLogo ?? '',
      status: dto.seller?.status ?? '',
      reputation: dto.seller?.reputation ?? 0,
      metrics: dto.seller?.metrics ?? { totalProducts: 0, totalSales: 0 },
    },
    shipping: {
      ...dto.shipping,
      cost: dto.shipping?.cost ?? 0,
      isFree: dto.shipping?.isFree ?? false,
      estimatedDeliveryDays: dto.shipping?.estimatedDeliveryDays ?? 'No disponible',
    },
    availability: {
      ...dto.availability,
      stock: dto.availability?.stock ?? 0,
      available: dto.availability?.available ?? false,
    },
  };
}
