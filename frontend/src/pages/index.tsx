import { useState, useEffect } from 'react';

interface ProductData {
  id: string;
  title: string;
  description: string;
  price: {
    amount: number;
    currency: string;
  };
  seller: {
    name: string;
    reputation: number;
  };
}

export default function Home() {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/v1/products/MLA123456789');
      const data = await response.json();
      setProduct(data.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🛒 MercadoLibre Challenge</h1>
      <p>Frontend + Backend funcionando correctamente</p>
      
      <button 
        onClick={fetchProduct}
        style={{
          backgroundColor: '#3483fa',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        {loading ? 'Cargando...' : 'Obtener Producto'}
      </button>

      {product && (
        <div style={{
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <h2>{product.title}</h2>
          <p><strong>Descripción:</strong> {product.description}</p>
          <p><strong>Precio:</strong> {product.price.currency} {product.price.amount}</p>
          <p><strong>Vendedor:</strong> {product.seller.name} (⭐ {product.seller.reputation})</p>
          <p><strong>ID:</strong> {product.id}</p>
        </div>
      )}
    </div>
    );
};