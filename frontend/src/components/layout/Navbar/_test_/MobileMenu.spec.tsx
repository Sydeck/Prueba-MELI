// src/components/layout/__tests__/MobileMenu.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import MobileMenu from '../MobileMenu';

describe('MobileMenu', () => {
  it('renders menu and cart buttons with correct labels', () => {
    render(<MobileMenu />);
    const menuButton = screen.getByRole('button', { name: /menú/i });
    const cartButton = screen.getByRole('button', { name: /carrito/i });

    expect(menuButton).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });

  it('calls onMenuClick when menu button is clicked', () => {
    const onMenuClick = jest.fn();
    render(<MobileMenu onMenuClick={onMenuClick} />);
    const menuButton = screen.getByRole('button', { name: /menú/i });

    fireEvent.click(menuButton);
    expect(onMenuClick).toHaveBeenCalledTimes(1);
  });

  it('calls onCartClick when cart button is clicked', () => {
    const onCartClick = jest.fn();
    render(<MobileMenu onCartClick={onCartClick} />);
    const cartButton = screen.getByRole('button', { name: /carrito/i });

    fireEvent.click(cartButton);
    expect(onCartClick).toHaveBeenCalledTimes(1);
  });
});
