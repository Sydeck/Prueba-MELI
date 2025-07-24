import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { useClickOutside } from '@/hooks/useClickOutside';
import { buildQtyOptions } from '@/utils/qty';

interface QuantityDropdownProps {
  qty: number;
  setQty: (n: number) => void;
  stock: number;
  maxQty: number;
}

export default function QuantityDropdown({ qty, setQty, stock, maxQty }: QuantityDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const safeStock = Math.max(0, stock || 0);
  const safeMax = Math.max(1, maxQty || 1);
  const options = buildQtyOptions(Math.min(safeStock, safeMax));

  // Corrige qty cuando está fuera del rango
  useEffect(() => {
    if (!options.includes(qty)) {
      setQty(options.length > 0 ? options[0] : 1);
    }
  }, [qty, options, setQty]);

  const handleSelect = (n: number) => {
    setQty(n);
    setOpen(false);
  };

  const isDisabled = safeStock === 0 || options.length === 0;

  return (
    <div className="space-y-2">
      <div ref={ref} className="relative inline-block w-full">
        <button
          type="button"
          data-testid="qty-toggle"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls="qty-options"
          onClick={() => !isDisabled && setOpen(o => !o)}
          disabled={isDisabled}
          className={clsx(
            'flex items-center justify-between w-full h-9 px-3 border lg:border-none rounded text-sm bg-white',
            'hover:border-ml-blue-main focus:outline-none focus:ring-2 focus:ring-ml-blue-main',
            isDisabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <span className="text-sm text-gray-700">
            {isDisabled ? 'Sin stock disponible' : `Cantidad: ${qty}`}
          </span>
          {!isDisabled && <span className="text-xs text-gray-500">({safeStock} disponibles)</span>}
          <svg
            aria-hidden="true"
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
          </svg>
        </button>

        {open && (
          <ul
            id="qty-options"
            role="listbox"
            tabIndex={-1}
            className="absolute z-20 mt-1 w-full lg:w-2/5 max-h-56 overflow-auto border rounded bg-white shadow-lg text-sm focus:outline-none"
          >
            {options.map(n => (
              <li key={n}>
                <button
                  data-testid={`qty-option-${n}`}
                  role="option"
                  aria-selected={qty === n}
                  onClick={() => handleSelect(n)}
                  className={clsx(
                    'w-full text-left px-3 py-2 hover:bg-gray-100',
                    qty === n && 'bg-[#E6F0FF] text-ml-blue-main font-medium'
                  )}
                >
                  {n} {n === 1 ? 'unidad' : 'unidades'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
