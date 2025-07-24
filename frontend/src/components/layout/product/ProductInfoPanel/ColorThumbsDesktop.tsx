import React from 'react';
import clsx from 'clsx';
import { ColorThumb } from './types';

interface Props {
  colors: ColorThumb[];
  activeColor: number;
  onSelect: (i: number) => void;
}

export default function ColorThumbsDesktop({ colors, activeColor, onSelect }: Props) {
  if (!colors.length) return null;

  return (
    <div className="space-y-2 hidden lg:block">
      <p className="text-sm font-normal text-gray-800 my-2">
        Color:{' '}
        <span className="font-semibold">{colors[activeColor]?.alt ?? 'Selecciona un color'}</span>
      </p>
      <div className="hidden lg:flex gap-3">
        {colors.map((c, idx) => (
          <button
            key={c.alt}
            className={clsx(
              'w-12 h-12 border rounded overflow-hidden focus:ring-1 focus:ring-ml-blue-main',
              idx === activeColor && 'border-1 border-ml-blue-main'
            )}
            onClick={() => onSelect(idx)}
          >
            <img src={c.src} alt={c.alt} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
