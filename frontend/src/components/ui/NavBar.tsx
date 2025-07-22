// src/components/layout/Navbar.tsx
import React from 'react';
import { MapPin, Menu, Search, ShoppingCart } from 'lucide-react';
import CategoriesDropdown from './Dropdown/CategoriesDropdown';

interface NavbarProps {
  onMenuClick?: () => void;
  onCartClick?: () => void;
}

export default function Navbar({ onMenuClick, onCartClick }: NavbarProps) {
  return (
    <header className="w-full bg-[#FFF159] lg:bg-[#FFE600] shadow-sm">
      <div className="max-w-screen-xl mx-auto px-2 pt-2 pb-3 h-[90px] lg:h-[100px]">
        {/* 
          MÓVIL: grid-cols-[auto_1fr_auto] 
          1ª columna = logo (auto)
          2ª columna = buscador (1fr)
          3ª columna = menú+carrito (auto)
          
          ESCRITORIO (md): vuelve a tu grid 3×2 original
        */}
        <div
          className="
            grid
            grid-cols-[auto_1fr_auto]
            grid-rows-2
            gap-y-1
            mx-4
            items-center
            gap-x-4
            lg:mx-10
            lg:grid-cols-[162px_minmax(340px,700px)_minmax(300px,350px)]
            lg:grid-rows-[40px_28px]
            lg:gap-x-5  lg:gap-y-3
          "
        >
          {/* Fila 1 Col 1: Logo */}
          <div className="flex items-center">
            <picture>
              {/* Móvil: hasta 1023px */}
              <source media="(max-width: 1023px)" srcSet="/images/navbar/logo-ml-small.png" />
              {/* Desktop: 1024px+ */}
              <source media="(min-width: 1024px)" srcSet="/images/navbar/logo-ml-large.png" />
              {/* Fallback */}
              <img
                src="/images/navbar/logo-ml-large.png"
                alt="Mercado Libre"
                className="h-8 w-auto object-contain lg:h-auto lg:w-[134px]"
              />
            </picture>
          </div>

          {/* Fila 1 Col 2: Buscador reducido */}
          <div className="relative w-full h-8 lg:h-10">
            <input
              type="text"
              placeholder="Buscar..."
              className="
                w-full h-full
                rounded-sm
                pl-10
                bg-white text-sm
                focus:outline-none focus:ring-1 focus:ring-ml-blue-main
                lg:pl-4 lg:text-base
              "
            />
            <button
              type="button"
              aria-label="Buscar"
              className="
                absolute left-0 top-0
                h-full w-8 pl:3
                flex items-center justify-center
                border-r lg:border-l text-gray-500
                hover:text-ml-blue-dark
                lg:w-10 lg:right-0 lg:justify-end lg:left-auto lg:pr-3
              "
            >
              <Search className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Fila 1 Col 3: Menú y Carrito */}
          <div className="flex items-center justify-end gap-3 lg:hidden">
            <button onClick={onMenuClick} aria-label="Menú">
              <Menu className="w-6 h-6 text-ml-black" />
            </button>
            <button onClick={onCartClick} aria-label="Carrito">
              <ShoppingCart className="w-6 h-6 text-ml-black" />
            </button>
          </div>
          <div className="hidden lg:flex items-center justify-end gap-3 ">
            <img
              src="/images/navbar/free-shipping.png"
              alt="Mercado Libre"
              className="h-auto w-[340px] object-contain lg:h-auto "
            />
          </div>

          {/* ---------- Escritorio: 2ª fila (postal, categorías, acciones) ---------- */}
          {/* Col 1 */}

          <div className="relative row-span-1 col-span-3 lg:flex lg:items-center lg:col-span-1">
            <hr
              className="
                absolute
                top-0
                left-1/2
                w-screen
                -translate-x-1/2
                border-t-1 border-gray-400 lg:hidden
              "
            />
            <button className="flex pt-1 items-center lg:items-start gap-2 text-ml-gray-dark hover:text-ml-blue-dark">
              <MapPin className="w-5 h-5 lg:w-6 lg:h-6 mt-[2px]" />
              <div className="flex lg:flex-col text-left">
                <span className="text-sm font-normal mr-1 lg:text-xs lg:font-light text-black">
                  Ingresa tu
                </span>
                <span className="text-sm font-normal text-black">código postal</span>
              </div>
            </button>
          </div>

          {/* Col 2 */}
          <nav className="hidden lg:flex items-end justify-start gap-8 lg:gap-4 text-sm font-normal h-7 text-ml-black">
            <CategoriesDropdown />

            <button className="hover:text-ml-blue-dark hidden lg:inline-block">Ofertas</button>

            {/* Botón Cupones con badge */}
            <button className="relative hover:text-ml-blue-dark hidden xl:inline-block px-2">
              <span>Cupones</span>
              <span
                className="
                  absolute
                  -top-4 left-3
                  bg-ml-blue-main text-white
                  text-[8px] font-semibold
                  uppercase
                  px-1.5 py-[1px]
                  rounded-full
                  "
              >
                Nuevo
              </span>
            </button>

            <button className="hover:text-ml-blue-dark hidden lg:inline-block">Supermercado</button>

            <button className="hover:text-ml-blue-dark hidden lg:inline-block">Moda</button>

            <button className="relative hover:text-ml-blue-dark hidden xl:inline-block px-2">
              <span>Mercado Play</span>
              <span
                className="
                  absolute
                  -top-4 left-7
                  bg-[#00A650] text-white
                  text-[8px] font-semibold
                  uppercase
                  px-1.5 py-[1px]
                  rounded-full
                  "
              >
                GRATIS
              </span>
            </button>

            <button className="hover:text-ml-blue-dark hidden xl:inline-block">Vender</button>

            <button className="hover:text-ml-blue-dark hidden lg:inline-block">Ayuda</button>
          </nav>

          {/* Col 3 */}
          <div className="hidden items-center justify-end gap-6 text-sm text-ml-black lg:flex">
            <button className="hover:text-ml-blue-dark">Crea tu cuenta</button>
            <button className="hover:text-ml-blue-dark">Ingresa</button>
            <button className="hover:text-ml-blue-dark flex items-center gap-1">Mis compras</button>
            <button onClick={onCartClick} aria-label="Carrito" className="hover:text-ml-blue-dark">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
