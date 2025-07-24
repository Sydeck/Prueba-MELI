// src/components/footer/__tests__/PopularProducts.spec.tsx
import { render, screen } from '@testing-library/react';
import PopularProducts from '../PopularProducts';

describe('PopularProducts', () => {
  const products = ['iPhone', 'Samsung', 'Xiaomi'];

  it('renders the title and products', () => {
    render(<PopularProducts products={products} />);
    expect(screen.getByTestId('popular-products-title')).toHaveTextContent(
      'Productos más buscados'
    );
    expect(screen.getByText(/iPhone - Samsung - Xiaomi/)).toBeInTheDocument();
  });

  it('renders with a custom title', () => {
    render(<PopularProducts products={products} title="Top buscados" />);
    expect(screen.getByTestId('popular-products-title')).toHaveTextContent('Top buscados');
  });
});
