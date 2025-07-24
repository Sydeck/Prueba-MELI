import { render, screen } from '@testing-library/react';
import BuyBox from '../BuyBox';

describe('BuyBox', () => {
  const seller = { brandLogo: '/logo.png', name: 'TechStore' };

  it('renders correctly with stock', () => {
    render(<BuyBox seller={seller} stock={5} qty={1} setQty={jest.fn()} maxQty={5} />);
    expect(screen.getByTestId('buy-box')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /comprar ahora/i })).toBeEnabled();
    expect(screen.getByRole('button', { name: /agregar al carrito/i })).toBeEnabled();
  });

  it('disables buttons when out of stock', () => {
    render(<BuyBox seller={seller} stock={0} qty={1} setQty={jest.fn()} maxQty={5} />);
    expect(screen.getByRole('button', { name: /comprar ahora/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /agregar al carrito/i })).toBeDisabled();
  });
});
