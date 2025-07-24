// src/components/layout/product/ProductInfoPanel/ColorThumbsDesktop.tsx
import React from 'react';
import clsx from 'clsx';
import { ProductVariant } from '@/types/product.types';

interface Props {
  colors: ProductVariant[];
  activeColor: number;
  onSelect: (i: number) => void;
}

export default function ColorThumbsDesktop({ colors = [], activeColor, onSelect }: Props) {
  if (colors.length === 0) return null;

  return (
    <div className="space-y-2 hidden lg:block">
      <p className="text-sm font-normal text-gray-800 my-2">
        Color:{' '}
        <span className="font-semibold">{colors[activeColor]?.color ?? 'Selecciona un color'}</span>
      </p>
      <div className="hidden lg:flex gap-3">
        {colors.map((c, idx) => (
          <button
            key={c.id}
            type="button"
            aria-label={`Seleccionar color ${c.color}`}
            data-testid={`desktop-color-${idx}`}
            className={clsx(
              'w-12 h-12 border rounded overflow-hidden focus:ring-1 focus:ring-ml-blue-main',
              idx === activeColor && 'border-2 border-ml-blue-main'
            )}
            onClick={() => onSelect(idx)}
          >
            <img src={c.image} alt={c.color} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
