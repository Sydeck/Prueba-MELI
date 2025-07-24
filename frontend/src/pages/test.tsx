import { useEffect, useState } from 'react';
import ApiService from '@/services/ApiService';
import { ProductDetailsDto } from '@/types/product.types';

export default function TestProduct() {
  const [product, setProduct] = useState<ProductDetailsDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ApiService.getProductById('MLA123456789')
      .then(setProduct)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{product.product.title}</h1>
      <p>{product.product.description}</p>
      <p>Precio: {product.product.price.formatted}</p>
    </div>
  );
}
