// src/hooks/useProductDetails.ts
import { useQuery } from '@tanstack/react-query';
import ApiService from '@/services/ApiService';
import { ProductDetailsDto } from '@/types/product.types';
import { mapProductDto } from '@/services/mappers/productMapper'; // Ajusta la ruta si es diferente

export function useProductDetails(productId: string) {
  return useQuery<ProductDetailsDto>({
    queryKey: ['product', productId],
    queryFn: () => ApiService.getProductById(productId),
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
    retry: 2,
    select: mapProductDto, // <- Aquí lo aplicamos
  });
}
