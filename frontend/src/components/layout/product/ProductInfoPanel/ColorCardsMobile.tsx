import React from 'react';
import clsx from 'clsx';
import { moneyFmt } from '@/utils/money';
import { ColorThumb } from './types';

interface Props {
  colors: ColorThumb[];
  activeColor: number;
  onSelect: (i: number) => void;
}

export default function ColorCardsMobile({ colors, activeColor, onSelect }: Props) {
  return (
    <>
      <p className="text-sm font-normal text-gray-800 my-2">
        Color:{' '}
        <span className="font-semibold">{colors[activeColor]?.alt ?? 'Selecciona un color'}</span>
      </p>

      <ul className="flex flex-nowrap gap-3 overflow-x-auto no-scrollbar py-1 w-full">
        {colors.map((c, i) => {
          const sel = i === activeColor;
          const { int } = moneyFmt(c.price);
          return (
            <li key={c.alt} className="shrink-0">
              <button
                type="button"
                onClick={() => onSelect(i)}
                className={clsx(
                  'w-[96px] h-[163px] flex flex-col justify-between items-start',
                  'rounded-md border bg-white p-2 transition',
                  'hover:border-ml-blue-main focus:outline-none focus:ring-1 focus:ring-ml-blue-main',
                  sel ? 'border-2 border-ml-blue-main bg-[#E6F0FF]' : 'border-gray-300'
                )}
              >
                <img src={c.src} alt={c.alt} className="w-14 h-13 object-cover mb-2 items-center" />
                <span className="text-xs text-gray-700 truncate">{c.alt}</span>
                <span className="text-sm text-gray-900 font-medium mt-1">$ {int}</span>
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
