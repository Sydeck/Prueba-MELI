// src/components/layout/MobileMenu.tsx
import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';

interface MobileMenuProps {
  onMenuClick?: () => void;
  onCartClick?: () => void;
}

export default function MobileMenu({ onMenuClick, onCartClick }: MobileMenuProps): JSX.Element {
  return (
    <div className="flex items-center justify-end gap-3 lg:hidden">
      <button onClick={onMenuClick} aria-label="Menú">
        <Menu className="w-6 h-6 text-ml-black" />
      </button>
      <button onClick={onCartClick} aria-label="Carrito">
        <ShoppingCart className="w-6 h-6 text-ml-black" />
      </button>
    </div>
  );
}
