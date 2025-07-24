// src/components/ui/__tests__/CategoriesDropdown.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import CategoriesDropdown from '../CategoriesDropdown';

describe('CategoriesDropdown', () => {
  it('renders trigger button', () => {
    render(<CategoriesDropdown />);
    const trigger = screen.getByTestId('categories-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens the menu on click', () => {
    render(<CategoriesDropdown />);
    const trigger = screen.getByTestId('categories-trigger');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('categories-menu')).toBeInTheDocument();
  });

  it('closes the menu when clicked again', () => {
    render(<CategoriesDropdown />);
    const trigger = screen.getByTestId('categories-trigger');
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the menu when clicking outside', () => {
    render(<CategoriesDropdown />);
    const trigger = screen.getByTestId('categories-trigger');
    fireEvent.click(trigger);
    fireEvent.mouseDown(document.body);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
