import React from 'react';
import BadgeButton from '@/components/ui/BadgeButton';
import CategoriesDropdown from '@/components/ui/Dropdown/CategoriesDropdown';

export default function NavLinks(): JSX.Element {
  return (
    <nav className="hidden lg:flex items-end justify-start gap-8 lg:gap-4 text-sm font-normal h-7 text-ml-black">
      <CategoriesDropdown />

      <button
        className="hidden lg:inline-block hover:text-ml-blue-dark"
        onClick={() => (window.location.href = 'https://www.mercadolibre.com.mx/ofertas')}
      >
        Ofertas
      </button>

      <BadgeButton
        label="Cupones"
        badgeText="Nuevo"
        visibilityClass="hidden xl:inline-block"
        badgeOffsetClass="-top-1 left-4"
        onClick={() =>
          (window.location.href = 'https://www.mercadolibre.com.mx/cupones#nav-header')
        }
      />

      <button
        className="hidden lg:inline-block hover:text-ml-blue-dark"
        onClick={() => (window.location.href = 'https://www.mercadolibre.com.mx/supermercado')}
      >
        Supermercado
      </button>

      <button
        className="hidden lg:inline-block hover:text-ml-blue-dark"
        onClick={() => (window.location.href = 'https://www.mercadolibre.com.mx/moda')}
      >
        Moda
      </button>

      <BadgeButton
        label="Mercado Play"
        badgeText="GRATIS"
        visibilityClass="hidden xl:inline-block"
        badgeOffsetClass="-top-1 left-8"
        className="px-2"
        color="bg-[#00A650]"
        onClick={() => (window.location.href = 'https://www.mercadolibre.com.mx/mercadoplay')}
      />

      <button
        className="hidden xl:inline-block hover:text-ml-blue-dark"
        onClick={() =>
          (window.location.href = 'https://www.mercadolibre.com.mx/syi/core/list/sell')
        }
      >
        Vender
      </button>

      <button
        className="hidden lg:inline-block hover:text-ml-blue-dark"
        onClick={() => (window.location.href = 'https://www.mercadolibre.com.mx/ayuda')}
      >
        Ayuda
      </button>
    </nav>
  );
}
