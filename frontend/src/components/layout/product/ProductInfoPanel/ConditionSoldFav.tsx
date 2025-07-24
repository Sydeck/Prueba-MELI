// src/components/product/ProductInfoPanel/ConditionSoldFav.tsx
import React from 'react';
import { Heart } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  condition: string;
  soldQty: number | string;
  fav: boolean;
  onToggleFav: () => void;
  className?: string;
  hideHeart?: boolean; // <--- NUEVO
}

export default function ConditionSoldFav({
  condition,
  soldQty,
  fav,
  onToggleFav,
  className,
  hideHeart = false,
}: Props) {
  return (
    <div
      className={clsx(
        'flex items-center text-xs lg:text-sm font-light text-gray-600 w-full',
        className
      )}
    >
      <div className="flex-1 flex justify-start">
        <span className="pr-2">{condition}</span>
        <span className="pl-2 border-l border-gray-300">+{soldQty} vendidos</span>
      </div>

      {!hideHeart && (
        <button
          aria-label={fav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          onClick={onToggleFav}
          className="hidden lg:block ml-auto p-1 text-ml-blue-main transition-colors"
        >
          <Heart
            className="w-6 h-6 mr-2"
            strokeWidth={2}
            fill={fav ? '#3483FA' : 'none'}
            stroke="#3483FA"
          />
        </button>
      )}
    </div>
  );
}
