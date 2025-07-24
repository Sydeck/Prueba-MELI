// src/components/ui/__tests__/CategoriesDropdown.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import CategoriesDropdown from '../Dropdown/CategoriesDropdown';

describe('CategoriesDropdown', () => {
  it('should open the menu on click', () => {
    render(<CategoriesDropdown />);
    const button = screen.getByRole('button', { name: /categorías/i });

    // Por defecto cerrado
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    // Click → abrir
    fireEvent.click(button);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('should close the menu when clicking outside', () => {
    render(<CategoriesDropdown />);
    const button = screen.getByRole('button', { name: /categorías/i });

    // Abrimos
    fireEvent.click(button);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // Click fuera
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('should open menu on mouse enter and close on leave', () => {
    render(<CategoriesDropdown />);
    const container = screen.getByRole('button', { name: /categorías/i }).parentElement!;

    // Hover abre
    fireEvent.mouseEnter(container);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // Mouse leave cierra
    fireEvent.mouseLeave(container);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('should render all category items', () => {
    render(<CategoriesDropdown />);
    fireEvent.click(screen.getByRole('button', { name: /categorías/i }));

    const items = screen.getAllByRole('menuitem');
    expect(items).toHaveLength(5);
    expect(items.map(i => i.textContent)).toEqual(
      expect.arrayContaining([
        'Vehículos',
        'Supermercado',
        'Tecnología',
        'Electrodomésticos',
        'Hogar y Muebles',
      ])
    );
  });
});
