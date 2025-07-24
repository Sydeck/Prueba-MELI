import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductInfoPanel, { ProductInfoPanelProps } from '../ProductInfoPanel';

const mockProps: ProductInfoPanelProps = {
  brandLogo: '/logo.png',
  brandLinkLabel: 'Marca X',
  condition: 'Nuevo',
  soldQty: 120,
  title: 'Producto de prueba',
  rating: 4.5,
  reviews: 20,
  oldPrice: '$2000',
  price: '$1500',
  priceCents: '99',
  discountPct: '25%',
  installments: '12x $125',
  ivaText: 'IVA incluido',
  colors: [
    { id: '1', color: 'Rojo', image: '/rojo.jpg', price: 1000, stock: 10 },
    { id: '2', color: 'Azul', image: '/azul.jpg', price: 1200, stock: 5 },
  ],
  facts: ['Característica 1', 'Característica 2'],
  activeColor: 0,
  onColorSelect: jest.fn(),
  onShare: jest.fn(),
};

describe('ProductInfoPanel', () => {
  it('renders main info correctly', () => {
    render(<ProductInfoPanel {...mockProps} />);

    // Título
    expect(screen.getByTestId('product-title')).toHaveTextContent(/Producto de prueba/i);

    // Facts
    expect(screen.getByText('Característica 1')).toBeInTheDocument();
    expect(screen.getByText('Característica 2')).toBeInTheDocument();

    // Price & Discount
    expect(screen.getByText('$1500')).toBeInTheDocument();
    expect(screen.getByText('25%')).toBeInTheDocument();
  });

  it('calls onShare when share button is triggered', () => {
    render(<ProductInfoPanel {...mockProps} />);
    const carousel = screen.getByTestId('mobile-carousel-section');
    const shareButton = carousel.querySelector(
      'button[aria-label="Compartir"]'
    ) as HTMLButtonElement;
    fireEvent.click(shareButton);
    expect(mockProps.onShare).toHaveBeenCalled();
  });

  it('toggles favorite state when heart button is clicked', () => {
    render(<ProductInfoPanel {...mockProps} />);
    const favButtons = screen.getAllByRole('button', { name: /favoritos/i });
    fireEvent.click(favButtons[0]);
    // Después del click, debería cambiar de "Agregar" a "Quitar"
    expect(favButtons[0].getAttribute('aria-label')).toMatch(/Quitar/i);
  });

  it('calls onColorSelect when a color option is clicked', () => {
    render(<ProductInfoPanel {...mockProps} />);
    const colorButtons = screen.getAllByRole('button', { name: /Seleccionar color/i });
    fireEvent.click(colorButtons[1]); // Azul
    expect(mockProps.onColorSelect).toHaveBeenCalledWith(1);
  });
});
