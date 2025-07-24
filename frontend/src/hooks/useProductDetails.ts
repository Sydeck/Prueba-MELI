import { useEffect, useState } from 'react';
import ApiService from '@/services/ApiService';
import { ProductDetailsDto } from '@/types/product.types';
import { mapProductDto } from '@/services/mappers/productMapper';

export function useProductDetails(productId: string) {
  const [product, setProduct] = useState<ProductDetailsDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    setProduct(null);
    setLoading(true);
    setError(null);

    ApiService.getProductById(productId)
      .then(data => setProduct(mapProductDto(data))) // <-- Normalizamos aquí
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error occurred');
        }
      })
      .finally(() => setLoading(false));
  }, [productId]);

  return { product, loading, error };
}
