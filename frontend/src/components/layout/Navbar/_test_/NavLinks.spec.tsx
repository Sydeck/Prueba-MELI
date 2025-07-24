// src/components/layout/__tests__/NavLinks.spec.tsx
import { render, screen } from '@testing-library/react';
import NavLinks from '../NavLinks';

describe('NavLinks', () => {
  it('renders all navigation links and buttons', () => {
    render(<NavLinks />);

    // Chequeamos texto de botones
    expect(screen.getByRole('button', { name: /Ofertas/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Supermercado/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Moda/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Vender/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ayuda/i })).toBeInTheDocument();

    // BadgeButton con label y badge visible
    expect(screen.getByText(/Cupones/i)).toBeInTheDocument();
    expect(screen.getByText(/Nuevo/i)).toBeInTheDocument();
    expect(screen.getByText(/Mercado Play/i)).toBeInTheDocument();
    expect(screen.getByText(/GRATIS/i)).toBeInTheDocument();
  });

  it('renders the CategoriesDropdown', () => {
    render(<NavLinks />);
    // El dropdown tiene un botón con texto "Categorías"
    expect(screen.getByRole('button', { name: /Categorías/i })).toBeInTheDocument();
  });
});
