import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface UserActionsProps {
  onCartClick?: () => void;
}

export default function UserActions({ onCartClick }: UserActionsProps): JSX.Element {
  return (
    <div className="hidden lg:flex items-center justify-end gap-6 text-sm text-ml-black">
      <button className="hover:text-ml-blue-dark">Crea tu cuenta</button>
      <button className="hover:text-ml-blue-dark">Ingresa</button>
      <button className="hover:text-ml-blue-dark flex items-center gap-1">Mis compras</button>
      <button onClick={onCartClick} aria-label="Carrito" className="hover:text-ml-blue-dark">
        <ShoppingCart className="w-6 h-6" />
      </button>
    </div>
  );
}
