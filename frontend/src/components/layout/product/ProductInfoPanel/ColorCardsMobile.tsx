import React from 'react';
import clsx from 'clsx';
import { moneyFmt } from '@/utils/money';
import { ProductVariant } from '@/types/product.types';

interface Props {
  colors: ProductVariant[];
  activeColor: number;
  onSelect: (i: number) => void;
  buttonClassName?: string;
}

export default function ColorCardsMobile({
  colors,
  activeColor,
  onSelect,
  buttonClassName,
}: Props) {
  return (
    <>
      <p className="text-sm font-normal text-gray-800 my-2">
        Color:{' '}
        <span className="font-semibold">{colors[activeColor]?.color ?? 'Selecciona un color'}</span>
      </p>

      <ul className="flex flex-nowrap gap-3 overflow-x-auto no-scrollbar py-1 w-full">
        {colors.map((c, i) => {
          const sel = i === activeColor;
          const { formatted } = moneyFmt(c.price);
          return (
            <li key={c.id} className="shrink-0">
              <button
                type="button"
                aria-pressed={sel}
                aria-label={`Seleccionar color ${c.color}, precio ${formatted}`}
                onClick={() => onSelect(i)}
                data-testid={`color-option-${i}`}
                className={clsx(
                  'w-[96px] h-[163px] flex flex-col justify-between items-start',
                  'rounded-md border bg-white p-2 transition',
                  'hover:border-ml-blue-main focus:outline-none focus:ring-1 focus:ring-ml-blue-main',
                  sel ? 'border-2 border-ml-blue-main bg-[#E6F0FF]' : 'border-gray-300',
                  buttonClassName
                )}
              >
                <img
                  src={c.images}
                  alt={c.color}
                  className="w-14 h-13 object-cover mb-2 items-center"
                />
                <span className="text-xs text-gray-700 truncate">{c.color}</span>
                <span className="text-sm text-gray-900 font-medium mt-1">{formatted}</span>
                <span className="text-[11px] text-gray-500">
                  {c.stock > 0 ? 'Disponible' : 'Sin stock'}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
