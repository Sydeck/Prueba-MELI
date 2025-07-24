import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CategoriesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar al hacer click fuera
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(o => !o)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 hover:text-ml-blue-dark transition-colors"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>Categorías</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="menu"
          className="
            absolute left-0 mt-2 w-56
            rounded-md shadow-md
            bg-[#333333] text-white py-2 z-20
            before:content-[''] before:absolute before:-top-2 before:left-[70px]
            before:w-0 before:h-0
            before:[border-left:8px_solid_transparent]
            before:[border-right:8px_solid_transparent]
            before:[border-bottom:8px_solid_#333333]
          "
        >
          {['Vehículos', 'Supermercado', 'Tecnología', 'Electrodomésticos', 'Hogar y Muebles'].map(
            item => (
              <li key={item}>
                <button
                  role="menuitem"
                  className="
                  w-full 
                  text-left 
                  px-5 py-2 
                  text-sm font-normal 
                  hover:bg-ml-blue-main 
                  hover:text-white
                  transition-colors
                "
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
