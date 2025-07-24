import { render, screen, fireEvent } from '@testing-library/react';
import UserActions from '../UserActions';

describe('UserActions', () => {
  it('renders all action buttons', () => {
    render(<UserActions />);
    expect(screen.getByRole('button', { name: /crea tu cuenta/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ingresa/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /mis compras/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /carrito/i })).toBeInTheDocument();
  });

  it('calls onCartClick when cart button is clicked', () => {
    const handleCartClick = jest.fn();
    render(<UserActions onCartClick={handleCartClick} />);
    fireEvent.click(screen.getByRole('button', { name: /carrito/i }));
    expect(handleCartClick).toHaveBeenCalledTimes(1);
  });
});
