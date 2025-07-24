import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '@/hooks/useOutsideHook';
import { CategoryMenuItem, Category } from './CategoryMenuItem';

/**
 * Fake data for the categories
 */
const categories: Category[] = [
  { name: 'Vehículos' },
  { name: 'Supermercado' },
  {
    name: 'Tecnología',
    children: [
      { name: 'Celulares y Telefonía' },
      { name: 'Cámaras y Accesorios' },
      { name: 'Consolas y Videojuegos' },
      { name: 'Computación' },
      { name: 'Electrónica, Audio y Video' },
    ],
  },
  { name: 'Electrodomésticos' },
  { name: 'Hogar y Muebles' },
];

export default function CategoriesDropdown() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useOutsideClick(ref, () => {
    setOpen(false);
    setActiveIdx(null);
  });

  return (
    <div
      ref={ref}
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setActiveIdx(null);
      }}
      onClick={() => setOpen(o => !o)}
    >
      {/* Trigger */}
      <button
        data-testid="categories-trigger"
        type="button"
        className="inline-flex w-auto h-7 items-end hover:text-ml-blue-dark transition-colors"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="text-sm font-normal">Categorías</span>
        <ChevronDown className="w-4 h-4" aria-hidden="true" />
      </button>

      {/* First level */}
      {open && (
        <ul
          data-testid="categories-menu"
          role="menu"
          className="
            absolute left-0 w-56
            rounded-md shadow-md
            bg-[#333333] text-white py-2 z-20
            before:content-[''] before:absolute before:-top-2 before:left-[66px]
            before:w-0 before:h-0
            before:[border-left:8px_solid_transparent]
            before:[border-right:8px_solid_transparent]
            before:[border-bottom:8px_solid_#333333]
          "
        >
          {categories.map((cat, idx) => (
            <CategoryMenuItem
              key={cat.name}
              category={cat}
              idx={idx}
              activeIdx={activeIdx}
              setActiveIdx={setActiveIdx}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
